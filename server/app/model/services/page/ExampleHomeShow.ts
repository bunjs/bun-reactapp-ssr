class Model_Services_Page_ExampleHomeShow extends App {
    constructor() {
        super();
    }
    execute(bsCommon = {}) {
        let data = new Model_Services_Data_ApiData().getData(bsCommon);
        return {
            home: data
        };
    }
}

export = Model_Services_Page_ExampleHomeShow;