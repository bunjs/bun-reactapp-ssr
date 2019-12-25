class Model_Services_Page_ExampleOneShow extends App {
    constructor() {
        super();
    }
    execute(bsCommon: any) {
        let data = new Model_Services_Data_ApiData().getData(bsCommon);
        return {
            pageone: data
        };
    }
}

export = Model_Services_Page_ExampleOneShow;