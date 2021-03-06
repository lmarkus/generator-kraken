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
/*global describe, it*/

'use strict';


var assert = require('yeoman-generator').assert,
    testutil = require('./util');


describe('kraken:template', function () {

    it('creates new dust template', function (done) {
        var base = testutil.makeBase('template');

        base.args = ['Foo'];
        base.options.templateModule = 'dustjs';
        base.options.i18n = false;

        testutil.run(base, function (err) {
            assert.file([
                'public/templates/Foo.dust'
            ]);

            assert.noFile([
                'locales/US/en/Foo.properties'
            ]);

            done(err);
        });
    });


    it('creates a locale file for a dust template', function (done) {
        var base = testutil.makeBase('template');

        base.args = ['Bar'];
        base.options.templateModule = 'dustjs';
        base.options.i18n = 'i18n';

        testutil.run(base, function (err) {
            assert.file([
                'public/templates/Bar.dust',
                'locales/US/en/Bar.properties'
            ]);

            done(err);
        });
    });

});
