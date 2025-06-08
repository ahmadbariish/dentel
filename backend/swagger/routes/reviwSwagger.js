/**
 * @swagger
 * tags:
 *   name: Reviws
 *   description: Reviw management and retrieval
 */

/**
 * @swagger
 * /reviws:
 *   post:
 *     summary: Create a reviw
 *     description: USER can create reviw.
 *     tags: [Reviws]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createReviw'
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 doc:
 *                     $ref: '#/components/schemas/Reviw'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all reviws
 *     description: USER,DOCTOR,ADMIN can retrieve all reviws.
 *     tags: [Reviws]
 *     security:
 *       - Bearer: []
 *     parameters:
 *       - in: query
 *         name: fields
 *         schema:
 *           type: string
 *         description: what fields do you want to show (ex. name,price)
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of reviws
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: key-words you want to search about it
 *       - in: query
 *         name: agg
 *         schema:
 *           type: string
 *         description: group data by any field  (ex. {group=[brand],max=price,min= price,sum=price,avg=price})
 *       - in: query
 *         name: aggDate
 *         schema:
 *           type: string
 *         description: group data by date fields   (ex. {group=[createdAt],date=month,max=price,min=price,avg=price,year=2022})
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name,-price)
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 doc:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Reviw'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /reviws/{id}:
 *   get:
 *     summary: Get a reviw
 *     description: USER,DOCTOR,ADMIN can use this router.
 *     tags: [Reviws]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Reviw id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 doc:
 *                     $ref: '#/components/schemas/Reviw'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a reviw
 *     description: USER can use this router.
 *     tags: [Reviws]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Reviw id
 *     requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/updateReviw'
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 doc:
 *                     $ref: '#/components/schemas/Reviw'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a  reviw.
 *     description: ADMIN can use this router.
 *     tags: [Reviws]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Reviw id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: success
 *                 data:
 *                   type: string
 *                   example: null
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

exports.Reviw = {
  type: 'object',
  properties: {
    id: { type: 'string' },
    // property
    user: { type: 'string' },
    rate: { type: 'number' },
    message: { type: 'string' },
  },
  example: {
    _id: '5ebac534954b54139806c112',
    // property example
    userId: '673c40cd59e293827f79e398',

    rate: 5,

    message: 'god services',

    createdAt: '2024-11-24T16:35:04.438Z',
    updatedAt: '2024-11-24T16:35:04.438Z',
  },
};
exports.createReviw = {
  type: 'object',
  properties: {
    // create property

    rate: { type: 'number' },
    message: { type: 'string' },
  },
  example: {
    // create property example

    rate: 5,

    message: 'god services',
  },
  required: [
    // required property
    'user',

    'rate',

    'message',
  ],
};
exports.updateReviw = {
  type: 'object',
  properties: {
    // update property

    rate: { type: 'number' },
    message: { type: 'string' },
  },
  example: {
    // update property example

    rate: 5,

    message: 'god services',
  },
};
