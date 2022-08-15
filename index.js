'use strict'
const axios = require('axios')
const ffMultipart = require('@fastify/multipart')

/*
 * Copyright 2019 Mia srl
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
 */
/* eslint require-await: 0 */

const customService = require('@mia-platform/custom-plugin-lib')()
/* eslint-disable-next-line no-unused-vars */
module.exports = customService(async function index(service) {
  service.register(ffMultipart)
  service.addRawCustomPlugin('POST', '/', async(request, reply) => {
    const { ddforward, ...query } = request.query
    await axios({
      method: 'post',
      url: ddforward,
      params: query,
      data: request.body,
      headers: {
        'x-forwarded-for': request.headers['x-forwarded-for'] || request?.raw?.socket?.remoteAddress,
        'Content-Type': request.headers['content-type'],
      },
    })

    reply.code(200).send('ok')
  })

  service.addRawCustomPlugin('GET', '/', async(request, reply) => {
    reply.code(200).send('ok')
  })
})
