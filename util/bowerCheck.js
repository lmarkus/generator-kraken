/*───────────────────────────────────────────────────────────────────────────*\
 │  Copyright (C) 2014 eBay Software Foundation                                │
 │                                                                             │
 │hh ,'""`.                                                                    │
 │  / _  _ \  Licensed under the Apache License, Version 2.0 (the "License");  │
 │  |(@)(@)|  you may not use this file except in compliance with the License. │
 │  )  __  (  You may obtain a copy of the License at                          │
 │ /,'))((`.\                                                                  │
 │(( ((  )) ))    http://www.apache.org/licenses/LICENSE-2.0                   │
 │ `\ `)(' /'                                                                  │
 │                                                                             │
 │   Unless required by applicable law or agreed to in writing, software       │
 │   distributed under the License is distributed on an "AS IS" BASIS,         │
 │   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  │
 │   See the License for the specific language governing permissions and       │
 │   limitations under the License.                                            │
 \*───────────────────────────────────────────────────────────────────────────*/
'use strict';
var cp = require('child_process'),
    chalk = require('chalk');

/**
 * This function simply emits a warning message if bower is unavailable.
 */
module.exports = function bowerCheck() {

    var alreadyWarned;

    function warn() {
        alreadyWarned || console.error(chalk.red.bold('Warning:') + ' Bower not found. This may cause issues.\nHave you installed bower globally? (npm install bower --global)');
        alreadyWarned = true;
    };

    try {
        var process = cp.spawn('bower', ['-v']);
        //It's async, but since I just want to display a warning, I don't care much.
        process.on('close', function (status) {
            if (status !== 0) {
                warn();
            }
        });

        process.on('error', function () {
            warn();
        })
    }
    catch (err) {
        warn();
    }
};
