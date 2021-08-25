import { Step } from "@shanzhai/interfaces";
import { SerialStep } from "@shanzhai/serial-step";
import { zipContentStore } from "@shanzhai/zip-content-store";
import { zipStore } from "@shanzhai/zip-store";
import { ZipStep } from "@shanzhai/zip-step";
import { DeleteFromUnkeyedStoreStep } from "@shanzhai/delete-from-unkeyed-store-step";
import { KeyedStoreGetAllInput } from "@shanzhai/keyed-store-get-all-input";
import { UnkeyedStoreSetOutput } from "@shanzhai/unkeyed-store-set-output";
import zipPlugin = require(".");

describe(`zip-plugin`, () => {
  it(`listens for changes to zip content`, () => {
    expect(zipPlugin.triggers.zip.stores).toEqual([zipContentStore]);
  });

  describe(`when SVG defs change`, () => {
    let step: Step;

    beforeAll(() => {
      step = zipPlugin.triggers.zip.invalidated();
    });

    it(`zips all content`, () => {
      expect(step).toEqual(
        new SerialStep(`Zip`, [
          new DeleteFromUnkeyedStoreStep(zipStore),
          new ZipStep(
            `Zip`,
            new KeyedStoreGetAllInput(zipContentStore),
            new UnkeyedStoreSetOutput(zipStore)
          ),
        ])
      );
    });
  });
});
