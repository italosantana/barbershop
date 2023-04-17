import { graphql } from 'graphql';
import { expect, it, beforeAll, afterAll, beforeEach, jest } from '@jest/globals';

import { clearDbAndRestartCounters, connectMongoose, disconnectMongoose } from '../../../test';
import { schema } from '../../schema/schema';

beforeAll(connectMongoose);
beforeEach(clearDbAndRestartCounters);
afterAll(disconnectMongoose);
