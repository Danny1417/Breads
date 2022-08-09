const REact = require("react");
const DefaultLayout = require("./layouts/default");

function showView({bread}) {
      return (
             
            <DefaultLayout title="show Details">
                  <h2>Show Details page</h2>
            </DefaultLayout>
       )
}
 module.exports = showView