/**
 * Original Work Copyright 2015 Valmet Automation Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Modified work Copyright 2016 Argonne National Laboratory.
 *
 * Licensed under the the BSD 3-Clause License (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

function timestamp() {
    return new Date().
        toISOString().
        replace(/T/, ' ').      // replace T with a space
        replace(/\..+/, '')
}
function log(msg, args) {
    if (args)
        console.log(timestamp() + ': ' + msg, args);
    else
        console.log(timestamp() + ': ' + msg);
}


module.exports = function (RED) {
    var RED = require(process.env.NODE_RED_HOME+"/red/red");    
    var util = require('util');

    function AWSSESIn(config) {
        RED.nodes.createNode(this, config);
        this.email = config.email;            
    }

    //
    RED.nodes.registerType("aws-ses-in", AWSSESIn);

    function AWSSESOut(config) {
        RED.nodes.createNode(this, config);
        this.email = config.email;
    }
    
    RED.nodes.registerType("aws-ses-out", AWSSESOut);

}
