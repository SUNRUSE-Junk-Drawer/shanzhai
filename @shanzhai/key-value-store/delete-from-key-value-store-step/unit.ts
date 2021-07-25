import { DeleteFromKeyValueStoreStep, KeyValueStoreInterface } from "..";

describe(`DeleteFromKeyValueStoreStep`, () => {
  type TestValue = `Test Value`;

  describe(`on construction`, () => {
    let keyValueStoreGet: jasmine.Spy;
    let keyValueStoreSet: jasmine.Spy;
    let keyValueStoreDelete: jasmine.Spy;
    let keyValueStoreGetAll: jasmine.Spy;
    let keyValueStore: KeyValueStoreInterface<TestValue>;
    let deleteFromKeyValueStoreStep: DeleteFromKeyValueStoreStep<TestValue>;

    beforeAll(() => {
      keyValueStoreGet = jasmine.createSpy(`keyValueStoreGet`);
      keyValueStoreSet = jasmine.createSpy(`keyValueStoreSet`);
      keyValueStoreDelete = jasmine.createSpy(`keyValueStoreDelete`);
      keyValueStoreGetAll = jasmine.createSpy(`keyValueStoreGetAll`);
      keyValueStore = {
        type: `keyedStore`,
        name: `Test Name`,
        get: keyValueStoreGet,
        set: keyValueStoreSet,
        delete: keyValueStoreDelete,
        getAll: keyValueStoreGetAll,
      };

      deleteFromKeyValueStoreStep = new DeleteFromKeyValueStoreStep(
        keyValueStore,
        `Test Key`
      );
    });

    it(`exposes its name`, () => {
      expect(deleteFromKeyValueStoreStep.name).toEqual(
        `Delete "Test Key" from "Test Name"`
      );
    });

    it(`exposes the expected effects`, () => {
      expect(deleteFromKeyValueStoreStep.effects).toEqual([
        {
          type: `keyedStoreDelete`,
          keyedStore: keyValueStore,
          key: `Test Key`,
        },
      ]);
    });

    it(`exposes the key value store`, () => {
      expect(deleteFromKeyValueStoreStep.keyValueStore).toBe(keyValueStore);
    });

    it(`exposes the key`, () => {
      expect(deleteFromKeyValueStoreStep.key).toEqual(`Test Key`);
    });

    it(`does not get from the key value store`, () => {
      expect(keyValueStoreGet).not.toHaveBeenCalled();
    });

    it(`does not set values in the key value store`, () => {
      expect(keyValueStoreSet).not.toHaveBeenCalled();
    });

    it(`does not delete values from the key value store`, () => {
      expect(keyValueStoreDelete).not.toHaveBeenCalled();
    });

    it(`does not get all from the key value store`, () => {
      expect(keyValueStoreGetAll).not.toHaveBeenCalled();
    });
  });

  describe(`on execution`, () => {
    let keyValueStoreGet: jasmine.Spy;
    let keyValueStoreSet: jasmine.Spy;
    let keyValueStoreDelete: jasmine.Spy;
    let keyValueStoreGetAll: jasmine.Spy;
    let keyValueStore: KeyValueStoreInterface<TestValue>;
    let deleteFromKeyValueStoreStep: DeleteFromKeyValueStoreStep<TestValue>;

    beforeAll(async () => {
      keyValueStoreGet = jasmine.createSpy(`keyValueStoreGet`);
      keyValueStoreSet = jasmine.createSpy(`keyValueStoreSet`);
      keyValueStoreDelete = jasmine.createSpy(`keyValueStoreDelete`);
      keyValueStoreGetAll = jasmine.createSpy(`keyValueStoreGetAll`);
      keyValueStore = {
        type: `keyedStore`,
        name: `Test Name`,
        get: keyValueStoreGet,
        set: keyValueStoreSet,
        delete: keyValueStoreDelete,
        getAll: keyValueStoreGetAll,
      };

      deleteFromKeyValueStoreStep = new DeleteFromKeyValueStoreStep(
        keyValueStore,
        `Test Key`
      );

      await deleteFromKeyValueStoreStep.execute();
    });

    it(`continues to expose the key value store`, () => {
      expect(deleteFromKeyValueStoreStep.keyValueStore).toBe(keyValueStore);
    });

    it(`continues to expose the key`, () => {
      expect(deleteFromKeyValueStoreStep.key).toEqual(`Test Key`);
    });

    it(`does not get from the key value store`, () => {
      expect(keyValueStoreGet).not.toHaveBeenCalled();
    });

    it(`does not set values in the key value store`, () => {
      expect(keyValueStoreSet).not.toHaveBeenCalled();
    });

    it(`deletes one value from the key value store`, () => {
      expect(keyValueStoreDelete).toHaveBeenCalledTimes(1);
    });

    it(`deletes the specified value from the key value store`, () => {
      expect(keyValueStoreDelete).toHaveBeenCalledWith(`Test Key`);
    });

    it(`does not get all from the key value store`, () => {
      expect(keyValueStoreGetAll).not.toHaveBeenCalled();
    });
  });
});
