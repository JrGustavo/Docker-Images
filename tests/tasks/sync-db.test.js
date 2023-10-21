const  {syncDB: syncDbTest} =  require(  "../../tasks/sync-db");


describe('Pruebas en Sync-DB', () => {

    test('Debe de ejecutar el proceso 2 veces', () => {

        syncDbTest();
        const times = syncDbTest();
        expect(times).toBe(2);
    });
});

