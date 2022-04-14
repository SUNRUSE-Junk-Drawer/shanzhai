import {
  Step,
  OneTimeTrigger,
  Effect,
  FileTrigger,
} from "@shanzhai/interfaces";
import { ParallelStep } from "@shanzhai/parallel-step";
import { SerialStep } from "@shanzhai/serial-step";
import { plan } from ".";

class DummyStep implements Step {
  constructor(readonly name: string, readonly effects: ReadonlyArray<Effect>) {}

  readonly executePerActionStep = jasmine.createSpy(`executePerActionStep`);
}

describe(`plan`, () => {
  describe(`first run`, () => {
    let oneTimeStep: DummyStep;
    let addedFileStep: DummyStep;
    let oneTimeTrigger: OneTimeTrigger;
    let fileTrigger: FileTrigger;
    let output: {
      readonly unmatchedAddedFiles: ReadonlyArray<string>;
      readonly step: Step;
    };
    let outputSteps: ReadonlyArray<Step>;

    beforeAll(async () => {
      oneTimeStep = new DummyStep(`oneTimeStep`, []);
      addedFileStep = new DummyStep(`addedFileStep`, []);
      oneTimeTrigger = {
        type: `oneTime`,
        up: jasmine.createSpy(`oneTimeTrigger.up`).and.returnValue(oneTimeStep),
        writesToStores: [],
      };
      fileTrigger = {
        type: `file`,
        glob: `**/*.with-matching-file-extension`,
        down: jasmine.createSpy(`fileTrigger.down`),
        up: jasmine.createSpy(`fileTrigger.up`).and.returnValue(addedFileStep),
        writesToStores: [],
      };

      output = await plan(
        {
          testPluginA: { triggers: { oneTimeTrigger } },
          testPluginB: { triggers: { fileTrigger } },
        },
        true,
        {
          added: [
            `test/parsed/path.with-matching-file-extension`,
            `test/parsed/path.which-does-not-match-a`,
            `test-d1rec$ory-name/test-valid-fi$le-na\tme.test-file-extension`,
            `test/parsed/path.which-does-not-match-c`,
          ],
          deleted: [],
          changed: [],
          unchanged: [],
        }
      );

      const outputStepsValue: Step[] = [];

      function recurse(step: Step): void {
        outputStepsValue.push(step);

        if (step instanceof ParallelStep || step instanceof SerialStep) {
          for (const child of step.children) {
            recurse(child);
          }
        }
      }

      recurse(output.step);

      outputSteps = outputStepsValue;
    });

    it(`returns the expected steps`, () => {
      expect(outputSteps).toContain(oneTimeStep);
      expect(outputSteps).toContain(addedFileStep);
    });

    it(`returns the unmatched added files`, () => {
      expect(output.unmatchedAddedFiles).toEqual(
        jasmine.arrayWithExactContents([
          `test/parsed/path.which-does-not-match-a`,
          `test-d1rec$ory-name/test-valid-fi$le-na\tme.test-file-extension`,
          `test/parsed/path.which-does-not-match-c`,
        ])
      );
    });

    it(`does not execute any steps`, () => {
      expect(oneTimeStep.executePerActionStep).not.toHaveBeenCalled();
      expect(addedFileStep.executePerActionStep).not.toHaveBeenCalled();
    });

    it(`interacts with triggers as expected`, () => {
      expect(oneTimeTrigger.up).toHaveBeenCalledTimes(1);

      expect(fileTrigger.down).not.toHaveBeenCalled();
      expect(fileTrigger.up).toHaveBeenCalledWith(
        `test/parsed/path.with-matching-file-extension`
      );
      expect(fileTrigger.up).toHaveBeenCalledTimes(1);
    });
  });

  describe(`subsequent run`, () => {
    let addedFileStep: DummyStep;
    let changedDownFileStep: DummyStep;
    let changedUpFileStep: DummyStep;
    let deletedFileStep: DummyStep;
    let oneTimeTrigger: OneTimeTrigger;
    let fileTrigger: FileTrigger;
    let output: {
      readonly unmatchedAddedFiles: ReadonlyArray<string>;
      readonly step: Step;
    };
    let outputSteps: ReadonlyArray<Step>;

    beforeAll(async () => {
      addedFileStep = new DummyStep(`addedFileStep`, []);
      changedDownFileStep = new DummyStep(`changedDownFileStep`, []);
      changedUpFileStep = new DummyStep(`changedUpFileStep`, []);
      deletedFileStep = new DummyStep(`deletedFileStep`, []);
      oneTimeTrigger = {
        type: `oneTime`,
        up: jasmine.createSpy(`oneTimeTrigger.up`),
        writesToStores: [],
      };
      fileTrigger = {
        type: `file`,
        glob: `**/*.with-matching-file-extension`,
        down: jasmine.createSpy(`fileTrigger.down`).and.callFake((path) => {
          switch (path) {
            case `test/changed/path.with-matching-file-extension`:
              return changedDownFileStep;

            case `test/deleted/path.with-matching-file-extension`:
              return deletedFileStep;

            default:
              fail(`Unexpected path ${JSON.stringify(path)}.`);
              return null;
          }
        }),
        up: jasmine.createSpy(`fileTrigger.up`).and.callFake((path) => {
          switch (path) {
            case `test/changed/path.with-matching-file-extension`:
              return changedUpFileStep;

            case `test/added/path.with-matching-file-extension`:
              return addedFileStep;

            default:
              fail(`Unexpected path ${JSON.stringify(path)}.`);
              return null;
          }
        }),
        writesToStores: [],
      };

      output = await plan(
        {
          testPluginA: { triggers: { oneTimeTrigger } },
          testPluginB: { triggers: { fileTrigger: fileTrigger } },
        },
        false,
        {
          added: [
            `test/added/path.with-matching-file-extension`,
            `test/added/path.which-does-not-match-a`,
            `test-d1rec$ory-name/test-added-valid-fi$le-na\tme.test-file-extension`,
            `test/parsed/path.which-does-not-match-c`,
          ],
          deleted: [
            `test/deleted/path.with-matching-file-extension`,
            `test/deleted/path.which-does-not-match-a`,
            `test-d1rec$ory-name/test-deleted-valid-fi$le-na\tme.test-file-extension`,
          ],
          changed: [
            `test/changed/path.with-matching-file-extension`,
            `test/changed/path.which-does-not-match-a`,
            `test-d1rec$ory-name/test-changed-valid-fi$le-na\tme.test-file-extension`,
          ],
          unchanged: [
            `test/unchanged/path.with-matching-file-extension`,
            `test/unchanged/path.which-does-not-match-a`,
            `test-d1rec$ory-name/test-unchanged-valid-fi$le-na\tme.test-file-extension`,
          ],
        }
      );

      const outputStepsValue: Step[] = [];

      function recurse(step: Step): void {
        outputStepsValue.push(step);

        if (step instanceof ParallelStep || step instanceof SerialStep) {
          for (const child of step.children) {
            recurse(child);
          }
        }
      }

      recurse(output.step);

      outputSteps = outputStepsValue;
    });

    it(`returns the expected steps`, () => {
      expect(outputSteps).toContain(addedFileStep);
      expect(outputSteps).toContain(changedDownFileStep);
      expect(outputSteps).toContain(changedUpFileStep);
      expect(outputSteps).toContain(deletedFileStep);
    });

    it(`applies ordering constraints`, () => {
      function recurse(step: Step, foundDown: boolean): boolean {
        if (step instanceof ParallelStep) {
          let output = foundDown;

          for (const child of step.children) {
            output = output || recurse(child, foundDown);
          }

          return output;
        } else if (step instanceof SerialStep) {
          for (const child of step.children) {
            foundDown = foundDown || recurse(child, foundDown);
          }

          return foundDown;
        } else if (step === changedUpFileStep && !foundDown) {
          fail(`Found the up step before the down step.`);
          return false;
        } else if (step === changedDownFileStep) {
          return true;
        } else {
          return foundDown;
        }
      }

      recurse(output.step, false);
    });

    it(`returns the unmatched added files`, () => {
      expect(output.unmatchedAddedFiles).toEqual(
        jasmine.arrayWithExactContents([
          `test/added/path.which-does-not-match-a`,
          `test-d1rec$ory-name/test-added-valid-fi$le-na\tme.test-file-extension`,
          `test/parsed/path.which-does-not-match-c`,
        ])
      );
    });

    it(`does not execute any steps`, () => {
      expect(addedFileStep.executePerActionStep).not.toHaveBeenCalled();
      expect(changedDownFileStep.executePerActionStep).not.toHaveBeenCalled();
      expect(changedUpFileStep.executePerActionStep).not.toHaveBeenCalled();
      expect(deletedFileStep.executePerActionStep).not.toHaveBeenCalled();
    });

    it(`interacts with triggers as expected`, () => {
      expect(oneTimeTrigger.up).not.toHaveBeenCalled();

      expect(fileTrigger.down).toHaveBeenCalledWith(
        `test/changed/path.with-matching-file-extension`
      );
      expect(fileTrigger.down).toHaveBeenCalledWith(
        `test/deleted/path.with-matching-file-extension`
      );
      expect(fileTrigger.down).toHaveBeenCalledTimes(2);
      expect(fileTrigger.up).toHaveBeenCalledWith(
        `test/added/path.with-matching-file-extension`
      );
      expect(fileTrigger.up).toHaveBeenCalledWith(
        `test/changed/path.with-matching-file-extension`
      );
      expect(fileTrigger.up).toHaveBeenCalledTimes(2);
    });
  });

  describe(`first run without steps`, () => {
    let output: {
      readonly unmatchedAddedFiles: ReadonlyArray<string>;
      readonly step: Step;
    };

    beforeAll(async () => {
      output = await plan({}, true, {
        added: [
          `test/parsed/path.which-does-not-match-a`,
          `test-d1rec$ory-name/test-valid-fi$le-na\tme.test-file-extension`,
          `test/parsed/path.which-does-not-match-c`,
        ],
        deleted: [],
        changed: [],
        unchanged: [],
      });

      const outputStepsValue: Step[] = [];

      function recurse(step: Step): void {
        outputStepsValue.push(step);

        if (step instanceof ParallelStep || step instanceof SerialStep) {
          for (const child of step.children) {
            recurse(child);
          }
        }
      }

      recurse(output.step);
    });

    it(`returns a no-op step`, () => {
      expect([
        new SerialStep(jasmine.any(String) as unknown as string, []),
        new ParallelStep(jasmine.any(String) as unknown as string, []),
      ] as ReadonlyArray<Step>).toContain(output.step);
    });

    it(`returns the unmatched added files`, () => {
      expect(output.unmatchedAddedFiles).toEqual(
        jasmine.arrayWithExactContents([
          `test/parsed/path.which-does-not-match-a`,
          `test-d1rec$ory-name/test-valid-fi$le-na\tme.test-file-extension`,
          `test/parsed/path.which-does-not-match-c`,
        ])
      );
    });
  });

  describe(`subsequent run without steps`, () => {
    let output: {
      readonly unmatchedAddedFiles: ReadonlyArray<string>;
      readonly step: Step;
    };

    beforeAll(async () => {
      output = await plan({}, false, {
        added: [
          `test/parsed/path.which-does-not-match-a`,
          `test-d1rec$ory-name/test-valid-fi$le-na\tme.test-file-extension`,
          `test/parsed/path.which-does-not-match-c`,
        ],
        deleted: [],
        changed: [],
        unchanged: [],
      });

      const outputStepsValue: Step[] = [];

      function recurse(step: Step): void {
        outputStepsValue.push(step);

        if (step instanceof ParallelStep || step instanceof SerialStep) {
          for (const child of step.children) {
            recurse(child);
          }
        }
      }

      recurse(output.step);
    });

    it(`returns a no-op step`, () => {
      expect([
        new SerialStep(jasmine.any(String) as unknown as string, []),
        new ParallelStep(jasmine.any(String) as unknown as string, []),
      ] as ReadonlyArray<Step>).toContain(output.step);
    });

    it(`returns the unmatched added files`, () => {
      expect(output.unmatchedAddedFiles).toEqual(
        jasmine.arrayWithExactContents([
          `test/parsed/path.which-does-not-match-a`,
          `test-d1rec$ory-name/test-valid-fi$le-na\tme.test-file-extension`,
          `test/parsed/path.which-does-not-match-c`,
        ])
      );
    });
  });
});
