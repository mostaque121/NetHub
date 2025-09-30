
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model SpeedTest
 * 
 */
export type SpeedTest = $Result.DefaultSelection<Prisma.$SpeedTestPayload>
/**
 * Model FtpLink
 * 
 */
export type FtpLink = $Result.DefaultSelection<Prisma.$FtpLinkPayload>
/**
 * Model IpTvLink
 * 
 */
export type IpTvLink = $Result.DefaultSelection<Prisma.$IpTvLinkPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SpeedTests
 * const speedTests = await prisma.speedTest.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more SpeedTests
   * const speedTests = await prisma.speedTest.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.speedTest`: Exposes CRUD operations for the **SpeedTest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpeedTests
    * const speedTests = await prisma.speedTest.findMany()
    * ```
    */
  get speedTest(): Prisma.SpeedTestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ftpLink`: Exposes CRUD operations for the **FtpLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FtpLinks
    * const ftpLinks = await prisma.ftpLink.findMany()
    * ```
    */
  get ftpLink(): Prisma.FtpLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ipTvLink`: Exposes CRUD operations for the **IpTvLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IpTvLinks
    * const ipTvLinks = await prisma.ipTvLink.findMany()
    * ```
    */
  get ipTvLink(): Prisma.IpTvLinkDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    SpeedTest: 'SpeedTest',
    FtpLink: 'FtpLink',
    IpTvLink: 'IpTvLink'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "speedTest" | "ftpLink" | "ipTvLink"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SpeedTest: {
        payload: Prisma.$SpeedTestPayload<ExtArgs>
        fields: Prisma.SpeedTestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpeedTestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeedTestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpeedTestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeedTestPayload>
          }
          findFirst: {
            args: Prisma.SpeedTestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeedTestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpeedTestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeedTestPayload>
          }
          findMany: {
            args: Prisma.SpeedTestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeedTestPayload>[]
          }
          create: {
            args: Prisma.SpeedTestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeedTestPayload>
          }
          createMany: {
            args: Prisma.SpeedTestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SpeedTestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeedTestPayload>[]
          }
          delete: {
            args: Prisma.SpeedTestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeedTestPayload>
          }
          update: {
            args: Prisma.SpeedTestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeedTestPayload>
          }
          deleteMany: {
            args: Prisma.SpeedTestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpeedTestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SpeedTestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeedTestPayload>[]
          }
          upsert: {
            args: Prisma.SpeedTestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpeedTestPayload>
          }
          aggregate: {
            args: Prisma.SpeedTestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpeedTest>
          }
          groupBy: {
            args: Prisma.SpeedTestGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpeedTestGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpeedTestCountArgs<ExtArgs>
            result: $Utils.Optional<SpeedTestCountAggregateOutputType> | number
          }
        }
      }
      FtpLink: {
        payload: Prisma.$FtpLinkPayload<ExtArgs>
        fields: Prisma.FtpLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FtpLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FtpLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FtpLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FtpLinkPayload>
          }
          findFirst: {
            args: Prisma.FtpLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FtpLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FtpLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FtpLinkPayload>
          }
          findMany: {
            args: Prisma.FtpLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FtpLinkPayload>[]
          }
          create: {
            args: Prisma.FtpLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FtpLinkPayload>
          }
          createMany: {
            args: Prisma.FtpLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FtpLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FtpLinkPayload>[]
          }
          delete: {
            args: Prisma.FtpLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FtpLinkPayload>
          }
          update: {
            args: Prisma.FtpLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FtpLinkPayload>
          }
          deleteMany: {
            args: Prisma.FtpLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FtpLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FtpLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FtpLinkPayload>[]
          }
          upsert: {
            args: Prisma.FtpLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FtpLinkPayload>
          }
          aggregate: {
            args: Prisma.FtpLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFtpLink>
          }
          groupBy: {
            args: Prisma.FtpLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<FtpLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.FtpLinkCountArgs<ExtArgs>
            result: $Utils.Optional<FtpLinkCountAggregateOutputType> | number
          }
        }
      }
      IpTvLink: {
        payload: Prisma.$IpTvLinkPayload<ExtArgs>
        fields: Prisma.IpTvLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IpTvLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpTvLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IpTvLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpTvLinkPayload>
          }
          findFirst: {
            args: Prisma.IpTvLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpTvLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IpTvLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpTvLinkPayload>
          }
          findMany: {
            args: Prisma.IpTvLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpTvLinkPayload>[]
          }
          create: {
            args: Prisma.IpTvLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpTvLinkPayload>
          }
          createMany: {
            args: Prisma.IpTvLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IpTvLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpTvLinkPayload>[]
          }
          delete: {
            args: Prisma.IpTvLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpTvLinkPayload>
          }
          update: {
            args: Prisma.IpTvLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpTvLinkPayload>
          }
          deleteMany: {
            args: Prisma.IpTvLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IpTvLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IpTvLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpTvLinkPayload>[]
          }
          upsert: {
            args: Prisma.IpTvLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpTvLinkPayload>
          }
          aggregate: {
            args: Prisma.IpTvLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIpTvLink>
          }
          groupBy: {
            args: Prisma.IpTvLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<IpTvLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.IpTvLinkCountArgs<ExtArgs>
            result: $Utils.Optional<IpTvLinkCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    speedTest?: SpeedTestOmit
    ftpLink?: FtpLinkOmit
    ipTvLink?: IpTvLinkOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model SpeedTest
   */

  export type AggregateSpeedTest = {
    _count: SpeedTestCountAggregateOutputType | null
    _avg: SpeedTestAvgAggregateOutputType | null
    _sum: SpeedTestSumAggregateOutputType | null
    _min: SpeedTestMinAggregateOutputType | null
    _max: SpeedTestMaxAggregateOutputType | null
  }

  export type SpeedTestAvgAggregateOutputType = {
    download: number | null
  }

  export type SpeedTestSumAggregateOutputType = {
    download: number | null
  }

  export type SpeedTestMinAggregateOutputType = {
    id: string | null
    isp: string | null
    city: string | null
    country: string | null
    download: number | null
    createdAt: Date | null
  }

  export type SpeedTestMaxAggregateOutputType = {
    id: string | null
    isp: string | null
    city: string | null
    country: string | null
    download: number | null
    createdAt: Date | null
  }

  export type SpeedTestCountAggregateOutputType = {
    id: number
    isp: number
    city: number
    country: number
    download: number
    createdAt: number
    _all: number
  }


  export type SpeedTestAvgAggregateInputType = {
    download?: true
  }

  export type SpeedTestSumAggregateInputType = {
    download?: true
  }

  export type SpeedTestMinAggregateInputType = {
    id?: true
    isp?: true
    city?: true
    country?: true
    download?: true
    createdAt?: true
  }

  export type SpeedTestMaxAggregateInputType = {
    id?: true
    isp?: true
    city?: true
    country?: true
    download?: true
    createdAt?: true
  }

  export type SpeedTestCountAggregateInputType = {
    id?: true
    isp?: true
    city?: true
    country?: true
    download?: true
    createdAt?: true
    _all?: true
  }

  export type SpeedTestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpeedTest to aggregate.
     */
    where?: SpeedTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeedTests to fetch.
     */
    orderBy?: SpeedTestOrderByWithRelationInput | SpeedTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpeedTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeedTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeedTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpeedTests
    **/
    _count?: true | SpeedTestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpeedTestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpeedTestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpeedTestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpeedTestMaxAggregateInputType
  }

  export type GetSpeedTestAggregateType<T extends SpeedTestAggregateArgs> = {
        [P in keyof T & keyof AggregateSpeedTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpeedTest[P]>
      : GetScalarType<T[P], AggregateSpeedTest[P]>
  }




  export type SpeedTestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpeedTestWhereInput
    orderBy?: SpeedTestOrderByWithAggregationInput | SpeedTestOrderByWithAggregationInput[]
    by: SpeedTestScalarFieldEnum[] | SpeedTestScalarFieldEnum
    having?: SpeedTestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpeedTestCountAggregateInputType | true
    _avg?: SpeedTestAvgAggregateInputType
    _sum?: SpeedTestSumAggregateInputType
    _min?: SpeedTestMinAggregateInputType
    _max?: SpeedTestMaxAggregateInputType
  }

  export type SpeedTestGroupByOutputType = {
    id: string
    isp: string
    city: string
    country: string
    download: number
    createdAt: Date
    _count: SpeedTestCountAggregateOutputType | null
    _avg: SpeedTestAvgAggregateOutputType | null
    _sum: SpeedTestSumAggregateOutputType | null
    _min: SpeedTestMinAggregateOutputType | null
    _max: SpeedTestMaxAggregateOutputType | null
  }

  type GetSpeedTestGroupByPayload<T extends SpeedTestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpeedTestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpeedTestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpeedTestGroupByOutputType[P]>
            : GetScalarType<T[P], SpeedTestGroupByOutputType[P]>
        }
      >
    >


  export type SpeedTestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isp?: boolean
    city?: boolean
    country?: boolean
    download?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["speedTest"]>

  export type SpeedTestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isp?: boolean
    city?: boolean
    country?: boolean
    download?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["speedTest"]>

  export type SpeedTestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isp?: boolean
    city?: boolean
    country?: boolean
    download?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["speedTest"]>

  export type SpeedTestSelectScalar = {
    id?: boolean
    isp?: boolean
    city?: boolean
    country?: boolean
    download?: boolean
    createdAt?: boolean
  }

  export type SpeedTestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isp" | "city" | "country" | "download" | "createdAt", ExtArgs["result"]["speedTest"]>

  export type $SpeedTestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpeedTest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      isp: string
      city: string
      country: string
      download: number
      createdAt: Date
    }, ExtArgs["result"]["speedTest"]>
    composites: {}
  }

  type SpeedTestGetPayload<S extends boolean | null | undefined | SpeedTestDefaultArgs> = $Result.GetResult<Prisma.$SpeedTestPayload, S>

  type SpeedTestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpeedTestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpeedTestCountAggregateInputType | true
    }

  export interface SpeedTestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpeedTest'], meta: { name: 'SpeedTest' } }
    /**
     * Find zero or one SpeedTest that matches the filter.
     * @param {SpeedTestFindUniqueArgs} args - Arguments to find a SpeedTest
     * @example
     * // Get one SpeedTest
     * const speedTest = await prisma.speedTest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpeedTestFindUniqueArgs>(args: SelectSubset<T, SpeedTestFindUniqueArgs<ExtArgs>>): Prisma__SpeedTestClient<$Result.GetResult<Prisma.$SpeedTestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SpeedTest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpeedTestFindUniqueOrThrowArgs} args - Arguments to find a SpeedTest
     * @example
     * // Get one SpeedTest
     * const speedTest = await prisma.speedTest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpeedTestFindUniqueOrThrowArgs>(args: SelectSubset<T, SpeedTestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpeedTestClient<$Result.GetResult<Prisma.$SpeedTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpeedTest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeedTestFindFirstArgs} args - Arguments to find a SpeedTest
     * @example
     * // Get one SpeedTest
     * const speedTest = await prisma.speedTest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpeedTestFindFirstArgs>(args?: SelectSubset<T, SpeedTestFindFirstArgs<ExtArgs>>): Prisma__SpeedTestClient<$Result.GetResult<Prisma.$SpeedTestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpeedTest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeedTestFindFirstOrThrowArgs} args - Arguments to find a SpeedTest
     * @example
     * // Get one SpeedTest
     * const speedTest = await prisma.speedTest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpeedTestFindFirstOrThrowArgs>(args?: SelectSubset<T, SpeedTestFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpeedTestClient<$Result.GetResult<Prisma.$SpeedTestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpeedTests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeedTestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpeedTests
     * const speedTests = await prisma.speedTest.findMany()
     * 
     * // Get first 10 SpeedTests
     * const speedTests = await prisma.speedTest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const speedTestWithIdOnly = await prisma.speedTest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpeedTestFindManyArgs>(args?: SelectSubset<T, SpeedTestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeedTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SpeedTest.
     * @param {SpeedTestCreateArgs} args - Arguments to create a SpeedTest.
     * @example
     * // Create one SpeedTest
     * const SpeedTest = await prisma.speedTest.create({
     *   data: {
     *     // ... data to create a SpeedTest
     *   }
     * })
     * 
     */
    create<T extends SpeedTestCreateArgs>(args: SelectSubset<T, SpeedTestCreateArgs<ExtArgs>>): Prisma__SpeedTestClient<$Result.GetResult<Prisma.$SpeedTestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpeedTests.
     * @param {SpeedTestCreateManyArgs} args - Arguments to create many SpeedTests.
     * @example
     * // Create many SpeedTests
     * const speedTest = await prisma.speedTest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpeedTestCreateManyArgs>(args?: SelectSubset<T, SpeedTestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpeedTests and returns the data saved in the database.
     * @param {SpeedTestCreateManyAndReturnArgs} args - Arguments to create many SpeedTests.
     * @example
     * // Create many SpeedTests
     * const speedTest = await prisma.speedTest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpeedTests and only return the `id`
     * const speedTestWithIdOnly = await prisma.speedTest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SpeedTestCreateManyAndReturnArgs>(args?: SelectSubset<T, SpeedTestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeedTestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SpeedTest.
     * @param {SpeedTestDeleteArgs} args - Arguments to delete one SpeedTest.
     * @example
     * // Delete one SpeedTest
     * const SpeedTest = await prisma.speedTest.delete({
     *   where: {
     *     // ... filter to delete one SpeedTest
     *   }
     * })
     * 
     */
    delete<T extends SpeedTestDeleteArgs>(args: SelectSubset<T, SpeedTestDeleteArgs<ExtArgs>>): Prisma__SpeedTestClient<$Result.GetResult<Prisma.$SpeedTestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SpeedTest.
     * @param {SpeedTestUpdateArgs} args - Arguments to update one SpeedTest.
     * @example
     * // Update one SpeedTest
     * const speedTest = await prisma.speedTest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpeedTestUpdateArgs>(args: SelectSubset<T, SpeedTestUpdateArgs<ExtArgs>>): Prisma__SpeedTestClient<$Result.GetResult<Prisma.$SpeedTestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpeedTests.
     * @param {SpeedTestDeleteManyArgs} args - Arguments to filter SpeedTests to delete.
     * @example
     * // Delete a few SpeedTests
     * const { count } = await prisma.speedTest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpeedTestDeleteManyArgs>(args?: SelectSubset<T, SpeedTestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpeedTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeedTestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpeedTests
     * const speedTest = await prisma.speedTest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpeedTestUpdateManyArgs>(args: SelectSubset<T, SpeedTestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpeedTests and returns the data updated in the database.
     * @param {SpeedTestUpdateManyAndReturnArgs} args - Arguments to update many SpeedTests.
     * @example
     * // Update many SpeedTests
     * const speedTest = await prisma.speedTest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SpeedTests and only return the `id`
     * const speedTestWithIdOnly = await prisma.speedTest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SpeedTestUpdateManyAndReturnArgs>(args: SelectSubset<T, SpeedTestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpeedTestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SpeedTest.
     * @param {SpeedTestUpsertArgs} args - Arguments to update or create a SpeedTest.
     * @example
     * // Update or create a SpeedTest
     * const speedTest = await prisma.speedTest.upsert({
     *   create: {
     *     // ... data to create a SpeedTest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpeedTest we want to update
     *   }
     * })
     */
    upsert<T extends SpeedTestUpsertArgs>(args: SelectSubset<T, SpeedTestUpsertArgs<ExtArgs>>): Prisma__SpeedTestClient<$Result.GetResult<Prisma.$SpeedTestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpeedTests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeedTestCountArgs} args - Arguments to filter SpeedTests to count.
     * @example
     * // Count the number of SpeedTests
     * const count = await prisma.speedTest.count({
     *   where: {
     *     // ... the filter for the SpeedTests we want to count
     *   }
     * })
    **/
    count<T extends SpeedTestCountArgs>(
      args?: Subset<T, SpeedTestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpeedTestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpeedTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeedTestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpeedTestAggregateArgs>(args: Subset<T, SpeedTestAggregateArgs>): Prisma.PrismaPromise<GetSpeedTestAggregateType<T>>

    /**
     * Group by SpeedTest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpeedTestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpeedTestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpeedTestGroupByArgs['orderBy'] }
        : { orderBy?: SpeedTestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpeedTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpeedTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpeedTest model
   */
  readonly fields: SpeedTestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpeedTest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpeedTestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SpeedTest model
   */
  interface SpeedTestFieldRefs {
    readonly id: FieldRef<"SpeedTest", 'String'>
    readonly isp: FieldRef<"SpeedTest", 'String'>
    readonly city: FieldRef<"SpeedTest", 'String'>
    readonly country: FieldRef<"SpeedTest", 'String'>
    readonly download: FieldRef<"SpeedTest", 'Float'>
    readonly createdAt: FieldRef<"SpeedTest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SpeedTest findUnique
   */
  export type SpeedTestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedTest
     */
    select?: SpeedTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeedTest
     */
    omit?: SpeedTestOmit<ExtArgs> | null
    /**
     * Filter, which SpeedTest to fetch.
     */
    where: SpeedTestWhereUniqueInput
  }

  /**
   * SpeedTest findUniqueOrThrow
   */
  export type SpeedTestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedTest
     */
    select?: SpeedTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeedTest
     */
    omit?: SpeedTestOmit<ExtArgs> | null
    /**
     * Filter, which SpeedTest to fetch.
     */
    where: SpeedTestWhereUniqueInput
  }

  /**
   * SpeedTest findFirst
   */
  export type SpeedTestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedTest
     */
    select?: SpeedTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeedTest
     */
    omit?: SpeedTestOmit<ExtArgs> | null
    /**
     * Filter, which SpeedTest to fetch.
     */
    where?: SpeedTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeedTests to fetch.
     */
    orderBy?: SpeedTestOrderByWithRelationInput | SpeedTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpeedTests.
     */
    cursor?: SpeedTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeedTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeedTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpeedTests.
     */
    distinct?: SpeedTestScalarFieldEnum | SpeedTestScalarFieldEnum[]
  }

  /**
   * SpeedTest findFirstOrThrow
   */
  export type SpeedTestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedTest
     */
    select?: SpeedTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeedTest
     */
    omit?: SpeedTestOmit<ExtArgs> | null
    /**
     * Filter, which SpeedTest to fetch.
     */
    where?: SpeedTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeedTests to fetch.
     */
    orderBy?: SpeedTestOrderByWithRelationInput | SpeedTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpeedTests.
     */
    cursor?: SpeedTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeedTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeedTests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpeedTests.
     */
    distinct?: SpeedTestScalarFieldEnum | SpeedTestScalarFieldEnum[]
  }

  /**
   * SpeedTest findMany
   */
  export type SpeedTestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedTest
     */
    select?: SpeedTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeedTest
     */
    omit?: SpeedTestOmit<ExtArgs> | null
    /**
     * Filter, which SpeedTests to fetch.
     */
    where?: SpeedTestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpeedTests to fetch.
     */
    orderBy?: SpeedTestOrderByWithRelationInput | SpeedTestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpeedTests.
     */
    cursor?: SpeedTestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpeedTests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpeedTests.
     */
    skip?: number
    distinct?: SpeedTestScalarFieldEnum | SpeedTestScalarFieldEnum[]
  }

  /**
   * SpeedTest create
   */
  export type SpeedTestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedTest
     */
    select?: SpeedTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeedTest
     */
    omit?: SpeedTestOmit<ExtArgs> | null
    /**
     * The data needed to create a SpeedTest.
     */
    data: XOR<SpeedTestCreateInput, SpeedTestUncheckedCreateInput>
  }

  /**
   * SpeedTest createMany
   */
  export type SpeedTestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpeedTests.
     */
    data: SpeedTestCreateManyInput | SpeedTestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpeedTest createManyAndReturn
   */
  export type SpeedTestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedTest
     */
    select?: SpeedTestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpeedTest
     */
    omit?: SpeedTestOmit<ExtArgs> | null
    /**
     * The data used to create many SpeedTests.
     */
    data: SpeedTestCreateManyInput | SpeedTestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpeedTest update
   */
  export type SpeedTestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedTest
     */
    select?: SpeedTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeedTest
     */
    omit?: SpeedTestOmit<ExtArgs> | null
    /**
     * The data needed to update a SpeedTest.
     */
    data: XOR<SpeedTestUpdateInput, SpeedTestUncheckedUpdateInput>
    /**
     * Choose, which SpeedTest to update.
     */
    where: SpeedTestWhereUniqueInput
  }

  /**
   * SpeedTest updateMany
   */
  export type SpeedTestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpeedTests.
     */
    data: XOR<SpeedTestUpdateManyMutationInput, SpeedTestUncheckedUpdateManyInput>
    /**
     * Filter which SpeedTests to update
     */
    where?: SpeedTestWhereInput
    /**
     * Limit how many SpeedTests to update.
     */
    limit?: number
  }

  /**
   * SpeedTest updateManyAndReturn
   */
  export type SpeedTestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedTest
     */
    select?: SpeedTestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SpeedTest
     */
    omit?: SpeedTestOmit<ExtArgs> | null
    /**
     * The data used to update SpeedTests.
     */
    data: XOR<SpeedTestUpdateManyMutationInput, SpeedTestUncheckedUpdateManyInput>
    /**
     * Filter which SpeedTests to update
     */
    where?: SpeedTestWhereInput
    /**
     * Limit how many SpeedTests to update.
     */
    limit?: number
  }

  /**
   * SpeedTest upsert
   */
  export type SpeedTestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedTest
     */
    select?: SpeedTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeedTest
     */
    omit?: SpeedTestOmit<ExtArgs> | null
    /**
     * The filter to search for the SpeedTest to update in case it exists.
     */
    where: SpeedTestWhereUniqueInput
    /**
     * In case the SpeedTest found by the `where` argument doesn't exist, create a new SpeedTest with this data.
     */
    create: XOR<SpeedTestCreateInput, SpeedTestUncheckedCreateInput>
    /**
     * In case the SpeedTest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpeedTestUpdateInput, SpeedTestUncheckedUpdateInput>
  }

  /**
   * SpeedTest delete
   */
  export type SpeedTestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedTest
     */
    select?: SpeedTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeedTest
     */
    omit?: SpeedTestOmit<ExtArgs> | null
    /**
     * Filter which SpeedTest to delete.
     */
    where: SpeedTestWhereUniqueInput
  }

  /**
   * SpeedTest deleteMany
   */
  export type SpeedTestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpeedTests to delete
     */
    where?: SpeedTestWhereInput
    /**
     * Limit how many SpeedTests to delete.
     */
    limit?: number
  }

  /**
   * SpeedTest without action
   */
  export type SpeedTestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpeedTest
     */
    select?: SpeedTestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpeedTest
     */
    omit?: SpeedTestOmit<ExtArgs> | null
  }


  /**
   * Model FtpLink
   */

  export type AggregateFtpLink = {
    _count: FtpLinkCountAggregateOutputType | null
    _min: FtpLinkMinAggregateOutputType | null
    _max: FtpLinkMaxAggregateOutputType | null
  }

  export type FtpLinkMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    description: string | null
    createdAt: Date | null
  }

  export type FtpLinkMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    description: string | null
    createdAt: Date | null
  }

  export type FtpLinkCountAggregateOutputType = {
    id: number
    name: number
    url: number
    description: number
    createdAt: number
    workingIn: number
    _all: number
  }


  export type FtpLinkMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    description?: true
    createdAt?: true
  }

  export type FtpLinkMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    description?: true
    createdAt?: true
  }

  export type FtpLinkCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    description?: true
    createdAt?: true
    workingIn?: true
    _all?: true
  }

  export type FtpLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FtpLink to aggregate.
     */
    where?: FtpLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FtpLinks to fetch.
     */
    orderBy?: FtpLinkOrderByWithRelationInput | FtpLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FtpLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FtpLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FtpLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FtpLinks
    **/
    _count?: true | FtpLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FtpLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FtpLinkMaxAggregateInputType
  }

  export type GetFtpLinkAggregateType<T extends FtpLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateFtpLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFtpLink[P]>
      : GetScalarType<T[P], AggregateFtpLink[P]>
  }




  export type FtpLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FtpLinkWhereInput
    orderBy?: FtpLinkOrderByWithAggregationInput | FtpLinkOrderByWithAggregationInput[]
    by: FtpLinkScalarFieldEnum[] | FtpLinkScalarFieldEnum
    having?: FtpLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FtpLinkCountAggregateInputType | true
    _min?: FtpLinkMinAggregateInputType
    _max?: FtpLinkMaxAggregateInputType
  }

  export type FtpLinkGroupByOutputType = {
    id: string
    name: string
    url: string
    description: string | null
    createdAt: Date
    workingIn: string[]
    _count: FtpLinkCountAggregateOutputType | null
    _min: FtpLinkMinAggregateOutputType | null
    _max: FtpLinkMaxAggregateOutputType | null
  }

  type GetFtpLinkGroupByPayload<T extends FtpLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FtpLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FtpLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FtpLinkGroupByOutputType[P]>
            : GetScalarType<T[P], FtpLinkGroupByOutputType[P]>
        }
      >
    >


  export type FtpLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    description?: boolean
    createdAt?: boolean
    workingIn?: boolean
  }, ExtArgs["result"]["ftpLink"]>

  export type FtpLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    description?: boolean
    createdAt?: boolean
    workingIn?: boolean
  }, ExtArgs["result"]["ftpLink"]>

  export type FtpLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    description?: boolean
    createdAt?: boolean
    workingIn?: boolean
  }, ExtArgs["result"]["ftpLink"]>

  export type FtpLinkSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    description?: boolean
    createdAt?: boolean
    workingIn?: boolean
  }

  export type FtpLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "description" | "createdAt" | "workingIn", ExtArgs["result"]["ftpLink"]>

  export type $FtpLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FtpLink"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      url: string
      description: string | null
      createdAt: Date
      workingIn: string[]
    }, ExtArgs["result"]["ftpLink"]>
    composites: {}
  }

  type FtpLinkGetPayload<S extends boolean | null | undefined | FtpLinkDefaultArgs> = $Result.GetResult<Prisma.$FtpLinkPayload, S>

  type FtpLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FtpLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FtpLinkCountAggregateInputType | true
    }

  export interface FtpLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FtpLink'], meta: { name: 'FtpLink' } }
    /**
     * Find zero or one FtpLink that matches the filter.
     * @param {FtpLinkFindUniqueArgs} args - Arguments to find a FtpLink
     * @example
     * // Get one FtpLink
     * const ftpLink = await prisma.ftpLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FtpLinkFindUniqueArgs>(args: SelectSubset<T, FtpLinkFindUniqueArgs<ExtArgs>>): Prisma__FtpLinkClient<$Result.GetResult<Prisma.$FtpLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FtpLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FtpLinkFindUniqueOrThrowArgs} args - Arguments to find a FtpLink
     * @example
     * // Get one FtpLink
     * const ftpLink = await prisma.ftpLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FtpLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, FtpLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FtpLinkClient<$Result.GetResult<Prisma.$FtpLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FtpLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FtpLinkFindFirstArgs} args - Arguments to find a FtpLink
     * @example
     * // Get one FtpLink
     * const ftpLink = await prisma.ftpLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FtpLinkFindFirstArgs>(args?: SelectSubset<T, FtpLinkFindFirstArgs<ExtArgs>>): Prisma__FtpLinkClient<$Result.GetResult<Prisma.$FtpLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FtpLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FtpLinkFindFirstOrThrowArgs} args - Arguments to find a FtpLink
     * @example
     * // Get one FtpLink
     * const ftpLink = await prisma.ftpLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FtpLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, FtpLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__FtpLinkClient<$Result.GetResult<Prisma.$FtpLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FtpLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FtpLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FtpLinks
     * const ftpLinks = await prisma.ftpLink.findMany()
     * 
     * // Get first 10 FtpLinks
     * const ftpLinks = await prisma.ftpLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ftpLinkWithIdOnly = await prisma.ftpLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FtpLinkFindManyArgs>(args?: SelectSubset<T, FtpLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FtpLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FtpLink.
     * @param {FtpLinkCreateArgs} args - Arguments to create a FtpLink.
     * @example
     * // Create one FtpLink
     * const FtpLink = await prisma.ftpLink.create({
     *   data: {
     *     // ... data to create a FtpLink
     *   }
     * })
     * 
     */
    create<T extends FtpLinkCreateArgs>(args: SelectSubset<T, FtpLinkCreateArgs<ExtArgs>>): Prisma__FtpLinkClient<$Result.GetResult<Prisma.$FtpLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FtpLinks.
     * @param {FtpLinkCreateManyArgs} args - Arguments to create many FtpLinks.
     * @example
     * // Create many FtpLinks
     * const ftpLink = await prisma.ftpLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FtpLinkCreateManyArgs>(args?: SelectSubset<T, FtpLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FtpLinks and returns the data saved in the database.
     * @param {FtpLinkCreateManyAndReturnArgs} args - Arguments to create many FtpLinks.
     * @example
     * // Create many FtpLinks
     * const ftpLink = await prisma.ftpLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FtpLinks and only return the `id`
     * const ftpLinkWithIdOnly = await prisma.ftpLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FtpLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, FtpLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FtpLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FtpLink.
     * @param {FtpLinkDeleteArgs} args - Arguments to delete one FtpLink.
     * @example
     * // Delete one FtpLink
     * const FtpLink = await prisma.ftpLink.delete({
     *   where: {
     *     // ... filter to delete one FtpLink
     *   }
     * })
     * 
     */
    delete<T extends FtpLinkDeleteArgs>(args: SelectSubset<T, FtpLinkDeleteArgs<ExtArgs>>): Prisma__FtpLinkClient<$Result.GetResult<Prisma.$FtpLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FtpLink.
     * @param {FtpLinkUpdateArgs} args - Arguments to update one FtpLink.
     * @example
     * // Update one FtpLink
     * const ftpLink = await prisma.ftpLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FtpLinkUpdateArgs>(args: SelectSubset<T, FtpLinkUpdateArgs<ExtArgs>>): Prisma__FtpLinkClient<$Result.GetResult<Prisma.$FtpLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FtpLinks.
     * @param {FtpLinkDeleteManyArgs} args - Arguments to filter FtpLinks to delete.
     * @example
     * // Delete a few FtpLinks
     * const { count } = await prisma.ftpLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FtpLinkDeleteManyArgs>(args?: SelectSubset<T, FtpLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FtpLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FtpLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FtpLinks
     * const ftpLink = await prisma.ftpLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FtpLinkUpdateManyArgs>(args: SelectSubset<T, FtpLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FtpLinks and returns the data updated in the database.
     * @param {FtpLinkUpdateManyAndReturnArgs} args - Arguments to update many FtpLinks.
     * @example
     * // Update many FtpLinks
     * const ftpLink = await prisma.ftpLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FtpLinks and only return the `id`
     * const ftpLinkWithIdOnly = await prisma.ftpLink.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FtpLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, FtpLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FtpLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FtpLink.
     * @param {FtpLinkUpsertArgs} args - Arguments to update or create a FtpLink.
     * @example
     * // Update or create a FtpLink
     * const ftpLink = await prisma.ftpLink.upsert({
     *   create: {
     *     // ... data to create a FtpLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FtpLink we want to update
     *   }
     * })
     */
    upsert<T extends FtpLinkUpsertArgs>(args: SelectSubset<T, FtpLinkUpsertArgs<ExtArgs>>): Prisma__FtpLinkClient<$Result.GetResult<Prisma.$FtpLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FtpLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FtpLinkCountArgs} args - Arguments to filter FtpLinks to count.
     * @example
     * // Count the number of FtpLinks
     * const count = await prisma.ftpLink.count({
     *   where: {
     *     // ... the filter for the FtpLinks we want to count
     *   }
     * })
    **/
    count<T extends FtpLinkCountArgs>(
      args?: Subset<T, FtpLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FtpLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FtpLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FtpLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FtpLinkAggregateArgs>(args: Subset<T, FtpLinkAggregateArgs>): Prisma.PrismaPromise<GetFtpLinkAggregateType<T>>

    /**
     * Group by FtpLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FtpLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FtpLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FtpLinkGroupByArgs['orderBy'] }
        : { orderBy?: FtpLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FtpLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFtpLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FtpLink model
   */
  readonly fields: FtpLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FtpLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FtpLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FtpLink model
   */
  interface FtpLinkFieldRefs {
    readonly id: FieldRef<"FtpLink", 'String'>
    readonly name: FieldRef<"FtpLink", 'String'>
    readonly url: FieldRef<"FtpLink", 'String'>
    readonly description: FieldRef<"FtpLink", 'String'>
    readonly createdAt: FieldRef<"FtpLink", 'DateTime'>
    readonly workingIn: FieldRef<"FtpLink", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * FtpLink findUnique
   */
  export type FtpLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FtpLink
     */
    select?: FtpLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FtpLink
     */
    omit?: FtpLinkOmit<ExtArgs> | null
    /**
     * Filter, which FtpLink to fetch.
     */
    where: FtpLinkWhereUniqueInput
  }

  /**
   * FtpLink findUniqueOrThrow
   */
  export type FtpLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FtpLink
     */
    select?: FtpLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FtpLink
     */
    omit?: FtpLinkOmit<ExtArgs> | null
    /**
     * Filter, which FtpLink to fetch.
     */
    where: FtpLinkWhereUniqueInput
  }

  /**
   * FtpLink findFirst
   */
  export type FtpLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FtpLink
     */
    select?: FtpLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FtpLink
     */
    omit?: FtpLinkOmit<ExtArgs> | null
    /**
     * Filter, which FtpLink to fetch.
     */
    where?: FtpLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FtpLinks to fetch.
     */
    orderBy?: FtpLinkOrderByWithRelationInput | FtpLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FtpLinks.
     */
    cursor?: FtpLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FtpLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FtpLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FtpLinks.
     */
    distinct?: FtpLinkScalarFieldEnum | FtpLinkScalarFieldEnum[]
  }

  /**
   * FtpLink findFirstOrThrow
   */
  export type FtpLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FtpLink
     */
    select?: FtpLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FtpLink
     */
    omit?: FtpLinkOmit<ExtArgs> | null
    /**
     * Filter, which FtpLink to fetch.
     */
    where?: FtpLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FtpLinks to fetch.
     */
    orderBy?: FtpLinkOrderByWithRelationInput | FtpLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FtpLinks.
     */
    cursor?: FtpLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FtpLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FtpLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FtpLinks.
     */
    distinct?: FtpLinkScalarFieldEnum | FtpLinkScalarFieldEnum[]
  }

  /**
   * FtpLink findMany
   */
  export type FtpLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FtpLink
     */
    select?: FtpLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FtpLink
     */
    omit?: FtpLinkOmit<ExtArgs> | null
    /**
     * Filter, which FtpLinks to fetch.
     */
    where?: FtpLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FtpLinks to fetch.
     */
    orderBy?: FtpLinkOrderByWithRelationInput | FtpLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FtpLinks.
     */
    cursor?: FtpLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FtpLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FtpLinks.
     */
    skip?: number
    distinct?: FtpLinkScalarFieldEnum | FtpLinkScalarFieldEnum[]
  }

  /**
   * FtpLink create
   */
  export type FtpLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FtpLink
     */
    select?: FtpLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FtpLink
     */
    omit?: FtpLinkOmit<ExtArgs> | null
    /**
     * The data needed to create a FtpLink.
     */
    data: XOR<FtpLinkCreateInput, FtpLinkUncheckedCreateInput>
  }

  /**
   * FtpLink createMany
   */
  export type FtpLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FtpLinks.
     */
    data: FtpLinkCreateManyInput | FtpLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FtpLink createManyAndReturn
   */
  export type FtpLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FtpLink
     */
    select?: FtpLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FtpLink
     */
    omit?: FtpLinkOmit<ExtArgs> | null
    /**
     * The data used to create many FtpLinks.
     */
    data: FtpLinkCreateManyInput | FtpLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FtpLink update
   */
  export type FtpLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FtpLink
     */
    select?: FtpLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FtpLink
     */
    omit?: FtpLinkOmit<ExtArgs> | null
    /**
     * The data needed to update a FtpLink.
     */
    data: XOR<FtpLinkUpdateInput, FtpLinkUncheckedUpdateInput>
    /**
     * Choose, which FtpLink to update.
     */
    where: FtpLinkWhereUniqueInput
  }

  /**
   * FtpLink updateMany
   */
  export type FtpLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FtpLinks.
     */
    data: XOR<FtpLinkUpdateManyMutationInput, FtpLinkUncheckedUpdateManyInput>
    /**
     * Filter which FtpLinks to update
     */
    where?: FtpLinkWhereInput
    /**
     * Limit how many FtpLinks to update.
     */
    limit?: number
  }

  /**
   * FtpLink updateManyAndReturn
   */
  export type FtpLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FtpLink
     */
    select?: FtpLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FtpLink
     */
    omit?: FtpLinkOmit<ExtArgs> | null
    /**
     * The data used to update FtpLinks.
     */
    data: XOR<FtpLinkUpdateManyMutationInput, FtpLinkUncheckedUpdateManyInput>
    /**
     * Filter which FtpLinks to update
     */
    where?: FtpLinkWhereInput
    /**
     * Limit how many FtpLinks to update.
     */
    limit?: number
  }

  /**
   * FtpLink upsert
   */
  export type FtpLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FtpLink
     */
    select?: FtpLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FtpLink
     */
    omit?: FtpLinkOmit<ExtArgs> | null
    /**
     * The filter to search for the FtpLink to update in case it exists.
     */
    where: FtpLinkWhereUniqueInput
    /**
     * In case the FtpLink found by the `where` argument doesn't exist, create a new FtpLink with this data.
     */
    create: XOR<FtpLinkCreateInput, FtpLinkUncheckedCreateInput>
    /**
     * In case the FtpLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FtpLinkUpdateInput, FtpLinkUncheckedUpdateInput>
  }

  /**
   * FtpLink delete
   */
  export type FtpLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FtpLink
     */
    select?: FtpLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FtpLink
     */
    omit?: FtpLinkOmit<ExtArgs> | null
    /**
     * Filter which FtpLink to delete.
     */
    where: FtpLinkWhereUniqueInput
  }

  /**
   * FtpLink deleteMany
   */
  export type FtpLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FtpLinks to delete
     */
    where?: FtpLinkWhereInput
    /**
     * Limit how many FtpLinks to delete.
     */
    limit?: number
  }

  /**
   * FtpLink without action
   */
  export type FtpLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FtpLink
     */
    select?: FtpLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FtpLink
     */
    omit?: FtpLinkOmit<ExtArgs> | null
  }


  /**
   * Model IpTvLink
   */

  export type AggregateIpTvLink = {
    _count: IpTvLinkCountAggregateOutputType | null
    _min: IpTvLinkMinAggregateOutputType | null
    _max: IpTvLinkMaxAggregateOutputType | null
  }

  export type IpTvLinkMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    description: string | null
    createdAt: Date | null
  }

  export type IpTvLinkMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    description: string | null
    createdAt: Date | null
  }

  export type IpTvLinkCountAggregateOutputType = {
    id: number
    name: number
    url: number
    description: number
    createdAt: number
    workingIn: number
    _all: number
  }


  export type IpTvLinkMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    description?: true
    createdAt?: true
  }

  export type IpTvLinkMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    description?: true
    createdAt?: true
  }

  export type IpTvLinkCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    description?: true
    createdAt?: true
    workingIn?: true
    _all?: true
  }

  export type IpTvLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IpTvLink to aggregate.
     */
    where?: IpTvLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IpTvLinks to fetch.
     */
    orderBy?: IpTvLinkOrderByWithRelationInput | IpTvLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IpTvLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IpTvLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IpTvLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IpTvLinks
    **/
    _count?: true | IpTvLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IpTvLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IpTvLinkMaxAggregateInputType
  }

  export type GetIpTvLinkAggregateType<T extends IpTvLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateIpTvLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIpTvLink[P]>
      : GetScalarType<T[P], AggregateIpTvLink[P]>
  }




  export type IpTvLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IpTvLinkWhereInput
    orderBy?: IpTvLinkOrderByWithAggregationInput | IpTvLinkOrderByWithAggregationInput[]
    by: IpTvLinkScalarFieldEnum[] | IpTvLinkScalarFieldEnum
    having?: IpTvLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IpTvLinkCountAggregateInputType | true
    _min?: IpTvLinkMinAggregateInputType
    _max?: IpTvLinkMaxAggregateInputType
  }

  export type IpTvLinkGroupByOutputType = {
    id: string
    name: string
    url: string
    description: string | null
    createdAt: Date
    workingIn: string[]
    _count: IpTvLinkCountAggregateOutputType | null
    _min: IpTvLinkMinAggregateOutputType | null
    _max: IpTvLinkMaxAggregateOutputType | null
  }

  type GetIpTvLinkGroupByPayload<T extends IpTvLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IpTvLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IpTvLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IpTvLinkGroupByOutputType[P]>
            : GetScalarType<T[P], IpTvLinkGroupByOutputType[P]>
        }
      >
    >


  export type IpTvLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    description?: boolean
    createdAt?: boolean
    workingIn?: boolean
  }, ExtArgs["result"]["ipTvLink"]>

  export type IpTvLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    description?: boolean
    createdAt?: boolean
    workingIn?: boolean
  }, ExtArgs["result"]["ipTvLink"]>

  export type IpTvLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    description?: boolean
    createdAt?: boolean
    workingIn?: boolean
  }, ExtArgs["result"]["ipTvLink"]>

  export type IpTvLinkSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    description?: boolean
    createdAt?: boolean
    workingIn?: boolean
  }

  export type IpTvLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "description" | "createdAt" | "workingIn", ExtArgs["result"]["ipTvLink"]>

  export type $IpTvLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "IpTvLink"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      url: string
      description: string | null
      createdAt: Date
      workingIn: string[]
    }, ExtArgs["result"]["ipTvLink"]>
    composites: {}
  }

  type IpTvLinkGetPayload<S extends boolean | null | undefined | IpTvLinkDefaultArgs> = $Result.GetResult<Prisma.$IpTvLinkPayload, S>

  type IpTvLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IpTvLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IpTvLinkCountAggregateInputType | true
    }

  export interface IpTvLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IpTvLink'], meta: { name: 'IpTvLink' } }
    /**
     * Find zero or one IpTvLink that matches the filter.
     * @param {IpTvLinkFindUniqueArgs} args - Arguments to find a IpTvLink
     * @example
     * // Get one IpTvLink
     * const ipTvLink = await prisma.ipTvLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IpTvLinkFindUniqueArgs>(args: SelectSubset<T, IpTvLinkFindUniqueArgs<ExtArgs>>): Prisma__IpTvLinkClient<$Result.GetResult<Prisma.$IpTvLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one IpTvLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IpTvLinkFindUniqueOrThrowArgs} args - Arguments to find a IpTvLink
     * @example
     * // Get one IpTvLink
     * const ipTvLink = await prisma.ipTvLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IpTvLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, IpTvLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IpTvLinkClient<$Result.GetResult<Prisma.$IpTvLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IpTvLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpTvLinkFindFirstArgs} args - Arguments to find a IpTvLink
     * @example
     * // Get one IpTvLink
     * const ipTvLink = await prisma.ipTvLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IpTvLinkFindFirstArgs>(args?: SelectSubset<T, IpTvLinkFindFirstArgs<ExtArgs>>): Prisma__IpTvLinkClient<$Result.GetResult<Prisma.$IpTvLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first IpTvLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpTvLinkFindFirstOrThrowArgs} args - Arguments to find a IpTvLink
     * @example
     * // Get one IpTvLink
     * const ipTvLink = await prisma.ipTvLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IpTvLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, IpTvLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__IpTvLinkClient<$Result.GetResult<Prisma.$IpTvLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more IpTvLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpTvLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IpTvLinks
     * const ipTvLinks = await prisma.ipTvLink.findMany()
     * 
     * // Get first 10 IpTvLinks
     * const ipTvLinks = await prisma.ipTvLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ipTvLinkWithIdOnly = await prisma.ipTvLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IpTvLinkFindManyArgs>(args?: SelectSubset<T, IpTvLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IpTvLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a IpTvLink.
     * @param {IpTvLinkCreateArgs} args - Arguments to create a IpTvLink.
     * @example
     * // Create one IpTvLink
     * const IpTvLink = await prisma.ipTvLink.create({
     *   data: {
     *     // ... data to create a IpTvLink
     *   }
     * })
     * 
     */
    create<T extends IpTvLinkCreateArgs>(args: SelectSubset<T, IpTvLinkCreateArgs<ExtArgs>>): Prisma__IpTvLinkClient<$Result.GetResult<Prisma.$IpTvLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many IpTvLinks.
     * @param {IpTvLinkCreateManyArgs} args - Arguments to create many IpTvLinks.
     * @example
     * // Create many IpTvLinks
     * const ipTvLink = await prisma.ipTvLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IpTvLinkCreateManyArgs>(args?: SelectSubset<T, IpTvLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many IpTvLinks and returns the data saved in the database.
     * @param {IpTvLinkCreateManyAndReturnArgs} args - Arguments to create many IpTvLinks.
     * @example
     * // Create many IpTvLinks
     * const ipTvLink = await prisma.ipTvLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many IpTvLinks and only return the `id`
     * const ipTvLinkWithIdOnly = await prisma.ipTvLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IpTvLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, IpTvLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IpTvLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a IpTvLink.
     * @param {IpTvLinkDeleteArgs} args - Arguments to delete one IpTvLink.
     * @example
     * // Delete one IpTvLink
     * const IpTvLink = await prisma.ipTvLink.delete({
     *   where: {
     *     // ... filter to delete one IpTvLink
     *   }
     * })
     * 
     */
    delete<T extends IpTvLinkDeleteArgs>(args: SelectSubset<T, IpTvLinkDeleteArgs<ExtArgs>>): Prisma__IpTvLinkClient<$Result.GetResult<Prisma.$IpTvLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one IpTvLink.
     * @param {IpTvLinkUpdateArgs} args - Arguments to update one IpTvLink.
     * @example
     * // Update one IpTvLink
     * const ipTvLink = await prisma.ipTvLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IpTvLinkUpdateArgs>(args: SelectSubset<T, IpTvLinkUpdateArgs<ExtArgs>>): Prisma__IpTvLinkClient<$Result.GetResult<Prisma.$IpTvLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more IpTvLinks.
     * @param {IpTvLinkDeleteManyArgs} args - Arguments to filter IpTvLinks to delete.
     * @example
     * // Delete a few IpTvLinks
     * const { count } = await prisma.ipTvLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IpTvLinkDeleteManyArgs>(args?: SelectSubset<T, IpTvLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IpTvLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpTvLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IpTvLinks
     * const ipTvLink = await prisma.ipTvLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IpTvLinkUpdateManyArgs>(args: SelectSubset<T, IpTvLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IpTvLinks and returns the data updated in the database.
     * @param {IpTvLinkUpdateManyAndReturnArgs} args - Arguments to update many IpTvLinks.
     * @example
     * // Update many IpTvLinks
     * const ipTvLink = await prisma.ipTvLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more IpTvLinks and only return the `id`
     * const ipTvLinkWithIdOnly = await prisma.ipTvLink.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IpTvLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, IpTvLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IpTvLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one IpTvLink.
     * @param {IpTvLinkUpsertArgs} args - Arguments to update or create a IpTvLink.
     * @example
     * // Update or create a IpTvLink
     * const ipTvLink = await prisma.ipTvLink.upsert({
     *   create: {
     *     // ... data to create a IpTvLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IpTvLink we want to update
     *   }
     * })
     */
    upsert<T extends IpTvLinkUpsertArgs>(args: SelectSubset<T, IpTvLinkUpsertArgs<ExtArgs>>): Prisma__IpTvLinkClient<$Result.GetResult<Prisma.$IpTvLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of IpTvLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpTvLinkCountArgs} args - Arguments to filter IpTvLinks to count.
     * @example
     * // Count the number of IpTvLinks
     * const count = await prisma.ipTvLink.count({
     *   where: {
     *     // ... the filter for the IpTvLinks we want to count
     *   }
     * })
    **/
    count<T extends IpTvLinkCountArgs>(
      args?: Subset<T, IpTvLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IpTvLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IpTvLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpTvLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IpTvLinkAggregateArgs>(args: Subset<T, IpTvLinkAggregateArgs>): Prisma.PrismaPromise<GetIpTvLinkAggregateType<T>>

    /**
     * Group by IpTvLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpTvLinkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IpTvLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IpTvLinkGroupByArgs['orderBy'] }
        : { orderBy?: IpTvLinkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IpTvLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIpTvLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IpTvLink model
   */
  readonly fields: IpTvLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IpTvLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IpTvLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the IpTvLink model
   */
  interface IpTvLinkFieldRefs {
    readonly id: FieldRef<"IpTvLink", 'String'>
    readonly name: FieldRef<"IpTvLink", 'String'>
    readonly url: FieldRef<"IpTvLink", 'String'>
    readonly description: FieldRef<"IpTvLink", 'String'>
    readonly createdAt: FieldRef<"IpTvLink", 'DateTime'>
    readonly workingIn: FieldRef<"IpTvLink", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * IpTvLink findUnique
   */
  export type IpTvLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpTvLink
     */
    select?: IpTvLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IpTvLink
     */
    omit?: IpTvLinkOmit<ExtArgs> | null
    /**
     * Filter, which IpTvLink to fetch.
     */
    where: IpTvLinkWhereUniqueInput
  }

  /**
   * IpTvLink findUniqueOrThrow
   */
  export type IpTvLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpTvLink
     */
    select?: IpTvLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IpTvLink
     */
    omit?: IpTvLinkOmit<ExtArgs> | null
    /**
     * Filter, which IpTvLink to fetch.
     */
    where: IpTvLinkWhereUniqueInput
  }

  /**
   * IpTvLink findFirst
   */
  export type IpTvLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpTvLink
     */
    select?: IpTvLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IpTvLink
     */
    omit?: IpTvLinkOmit<ExtArgs> | null
    /**
     * Filter, which IpTvLink to fetch.
     */
    where?: IpTvLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IpTvLinks to fetch.
     */
    orderBy?: IpTvLinkOrderByWithRelationInput | IpTvLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IpTvLinks.
     */
    cursor?: IpTvLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IpTvLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IpTvLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IpTvLinks.
     */
    distinct?: IpTvLinkScalarFieldEnum | IpTvLinkScalarFieldEnum[]
  }

  /**
   * IpTvLink findFirstOrThrow
   */
  export type IpTvLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpTvLink
     */
    select?: IpTvLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IpTvLink
     */
    omit?: IpTvLinkOmit<ExtArgs> | null
    /**
     * Filter, which IpTvLink to fetch.
     */
    where?: IpTvLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IpTvLinks to fetch.
     */
    orderBy?: IpTvLinkOrderByWithRelationInput | IpTvLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IpTvLinks.
     */
    cursor?: IpTvLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IpTvLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IpTvLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IpTvLinks.
     */
    distinct?: IpTvLinkScalarFieldEnum | IpTvLinkScalarFieldEnum[]
  }

  /**
   * IpTvLink findMany
   */
  export type IpTvLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpTvLink
     */
    select?: IpTvLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IpTvLink
     */
    omit?: IpTvLinkOmit<ExtArgs> | null
    /**
     * Filter, which IpTvLinks to fetch.
     */
    where?: IpTvLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IpTvLinks to fetch.
     */
    orderBy?: IpTvLinkOrderByWithRelationInput | IpTvLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IpTvLinks.
     */
    cursor?: IpTvLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IpTvLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IpTvLinks.
     */
    skip?: number
    distinct?: IpTvLinkScalarFieldEnum | IpTvLinkScalarFieldEnum[]
  }

  /**
   * IpTvLink create
   */
  export type IpTvLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpTvLink
     */
    select?: IpTvLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IpTvLink
     */
    omit?: IpTvLinkOmit<ExtArgs> | null
    /**
     * The data needed to create a IpTvLink.
     */
    data: XOR<IpTvLinkCreateInput, IpTvLinkUncheckedCreateInput>
  }

  /**
   * IpTvLink createMany
   */
  export type IpTvLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IpTvLinks.
     */
    data: IpTvLinkCreateManyInput | IpTvLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IpTvLink createManyAndReturn
   */
  export type IpTvLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpTvLink
     */
    select?: IpTvLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IpTvLink
     */
    omit?: IpTvLinkOmit<ExtArgs> | null
    /**
     * The data used to create many IpTvLinks.
     */
    data: IpTvLinkCreateManyInput | IpTvLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * IpTvLink update
   */
  export type IpTvLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpTvLink
     */
    select?: IpTvLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IpTvLink
     */
    omit?: IpTvLinkOmit<ExtArgs> | null
    /**
     * The data needed to update a IpTvLink.
     */
    data: XOR<IpTvLinkUpdateInput, IpTvLinkUncheckedUpdateInput>
    /**
     * Choose, which IpTvLink to update.
     */
    where: IpTvLinkWhereUniqueInput
  }

  /**
   * IpTvLink updateMany
   */
  export type IpTvLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IpTvLinks.
     */
    data: XOR<IpTvLinkUpdateManyMutationInput, IpTvLinkUncheckedUpdateManyInput>
    /**
     * Filter which IpTvLinks to update
     */
    where?: IpTvLinkWhereInput
    /**
     * Limit how many IpTvLinks to update.
     */
    limit?: number
  }

  /**
   * IpTvLink updateManyAndReturn
   */
  export type IpTvLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpTvLink
     */
    select?: IpTvLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the IpTvLink
     */
    omit?: IpTvLinkOmit<ExtArgs> | null
    /**
     * The data used to update IpTvLinks.
     */
    data: XOR<IpTvLinkUpdateManyMutationInput, IpTvLinkUncheckedUpdateManyInput>
    /**
     * Filter which IpTvLinks to update
     */
    where?: IpTvLinkWhereInput
    /**
     * Limit how many IpTvLinks to update.
     */
    limit?: number
  }

  /**
   * IpTvLink upsert
   */
  export type IpTvLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpTvLink
     */
    select?: IpTvLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IpTvLink
     */
    omit?: IpTvLinkOmit<ExtArgs> | null
    /**
     * The filter to search for the IpTvLink to update in case it exists.
     */
    where: IpTvLinkWhereUniqueInput
    /**
     * In case the IpTvLink found by the `where` argument doesn't exist, create a new IpTvLink with this data.
     */
    create: XOR<IpTvLinkCreateInput, IpTvLinkUncheckedCreateInput>
    /**
     * In case the IpTvLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IpTvLinkUpdateInput, IpTvLinkUncheckedUpdateInput>
  }

  /**
   * IpTvLink delete
   */
  export type IpTvLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpTvLink
     */
    select?: IpTvLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IpTvLink
     */
    omit?: IpTvLinkOmit<ExtArgs> | null
    /**
     * Filter which IpTvLink to delete.
     */
    where: IpTvLinkWhereUniqueInput
  }

  /**
   * IpTvLink deleteMany
   */
  export type IpTvLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which IpTvLinks to delete
     */
    where?: IpTvLinkWhereInput
    /**
     * Limit how many IpTvLinks to delete.
     */
    limit?: number
  }

  /**
   * IpTvLink without action
   */
  export type IpTvLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IpTvLink
     */
    select?: IpTvLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the IpTvLink
     */
    omit?: IpTvLinkOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SpeedTestScalarFieldEnum: {
    id: 'id',
    isp: 'isp',
    city: 'city',
    country: 'country',
    download: 'download',
    createdAt: 'createdAt'
  };

  export type SpeedTestScalarFieldEnum = (typeof SpeedTestScalarFieldEnum)[keyof typeof SpeedTestScalarFieldEnum]


  export const FtpLinkScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    description: 'description',
    createdAt: 'createdAt',
    workingIn: 'workingIn'
  };

  export type FtpLinkScalarFieldEnum = (typeof FtpLinkScalarFieldEnum)[keyof typeof FtpLinkScalarFieldEnum]


  export const IpTvLinkScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    description: 'description',
    createdAt: 'createdAt',
    workingIn: 'workingIn'
  };

  export type IpTvLinkScalarFieldEnum = (typeof IpTvLinkScalarFieldEnum)[keyof typeof IpTvLinkScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type SpeedTestWhereInput = {
    AND?: SpeedTestWhereInput | SpeedTestWhereInput[]
    OR?: SpeedTestWhereInput[]
    NOT?: SpeedTestWhereInput | SpeedTestWhereInput[]
    id?: StringFilter<"SpeedTest"> | string
    isp?: StringFilter<"SpeedTest"> | string
    city?: StringFilter<"SpeedTest"> | string
    country?: StringFilter<"SpeedTest"> | string
    download?: FloatFilter<"SpeedTest"> | number
    createdAt?: DateTimeFilter<"SpeedTest"> | Date | string
  }

  export type SpeedTestOrderByWithRelationInput = {
    id?: SortOrder
    isp?: SortOrder
    city?: SortOrder
    country?: SortOrder
    download?: SortOrder
    createdAt?: SortOrder
  }

  export type SpeedTestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SpeedTestWhereInput | SpeedTestWhereInput[]
    OR?: SpeedTestWhereInput[]
    NOT?: SpeedTestWhereInput | SpeedTestWhereInput[]
    isp?: StringFilter<"SpeedTest"> | string
    city?: StringFilter<"SpeedTest"> | string
    country?: StringFilter<"SpeedTest"> | string
    download?: FloatFilter<"SpeedTest"> | number
    createdAt?: DateTimeFilter<"SpeedTest"> | Date | string
  }, "id">

  export type SpeedTestOrderByWithAggregationInput = {
    id?: SortOrder
    isp?: SortOrder
    city?: SortOrder
    country?: SortOrder
    download?: SortOrder
    createdAt?: SortOrder
    _count?: SpeedTestCountOrderByAggregateInput
    _avg?: SpeedTestAvgOrderByAggregateInput
    _max?: SpeedTestMaxOrderByAggregateInput
    _min?: SpeedTestMinOrderByAggregateInput
    _sum?: SpeedTestSumOrderByAggregateInput
  }

  export type SpeedTestScalarWhereWithAggregatesInput = {
    AND?: SpeedTestScalarWhereWithAggregatesInput | SpeedTestScalarWhereWithAggregatesInput[]
    OR?: SpeedTestScalarWhereWithAggregatesInput[]
    NOT?: SpeedTestScalarWhereWithAggregatesInput | SpeedTestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SpeedTest"> | string
    isp?: StringWithAggregatesFilter<"SpeedTest"> | string
    city?: StringWithAggregatesFilter<"SpeedTest"> | string
    country?: StringWithAggregatesFilter<"SpeedTest"> | string
    download?: FloatWithAggregatesFilter<"SpeedTest"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SpeedTest"> | Date | string
  }

  export type FtpLinkWhereInput = {
    AND?: FtpLinkWhereInput | FtpLinkWhereInput[]
    OR?: FtpLinkWhereInput[]
    NOT?: FtpLinkWhereInput | FtpLinkWhereInput[]
    id?: StringFilter<"FtpLink"> | string
    name?: StringFilter<"FtpLink"> | string
    url?: StringFilter<"FtpLink"> | string
    description?: StringNullableFilter<"FtpLink"> | string | null
    createdAt?: DateTimeFilter<"FtpLink"> | Date | string
    workingIn?: StringNullableListFilter<"FtpLink">
  }

  export type FtpLinkOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    workingIn?: SortOrder
  }

  export type FtpLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    AND?: FtpLinkWhereInput | FtpLinkWhereInput[]
    OR?: FtpLinkWhereInput[]
    NOT?: FtpLinkWhereInput | FtpLinkWhereInput[]
    name?: StringFilter<"FtpLink"> | string
    description?: StringNullableFilter<"FtpLink"> | string | null
    createdAt?: DateTimeFilter<"FtpLink"> | Date | string
    workingIn?: StringNullableListFilter<"FtpLink">
  }, "id" | "url">

  export type FtpLinkOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    workingIn?: SortOrder
    _count?: FtpLinkCountOrderByAggregateInput
    _max?: FtpLinkMaxOrderByAggregateInput
    _min?: FtpLinkMinOrderByAggregateInput
  }

  export type FtpLinkScalarWhereWithAggregatesInput = {
    AND?: FtpLinkScalarWhereWithAggregatesInput | FtpLinkScalarWhereWithAggregatesInput[]
    OR?: FtpLinkScalarWhereWithAggregatesInput[]
    NOT?: FtpLinkScalarWhereWithAggregatesInput | FtpLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FtpLink"> | string
    name?: StringWithAggregatesFilter<"FtpLink"> | string
    url?: StringWithAggregatesFilter<"FtpLink"> | string
    description?: StringNullableWithAggregatesFilter<"FtpLink"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FtpLink"> | Date | string
    workingIn?: StringNullableListFilter<"FtpLink">
  }

  export type IpTvLinkWhereInput = {
    AND?: IpTvLinkWhereInput | IpTvLinkWhereInput[]
    OR?: IpTvLinkWhereInput[]
    NOT?: IpTvLinkWhereInput | IpTvLinkWhereInput[]
    id?: StringFilter<"IpTvLink"> | string
    name?: StringFilter<"IpTvLink"> | string
    url?: StringFilter<"IpTvLink"> | string
    description?: StringNullableFilter<"IpTvLink"> | string | null
    createdAt?: DateTimeFilter<"IpTvLink"> | Date | string
    workingIn?: StringNullableListFilter<"IpTvLink">
  }

  export type IpTvLinkOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    workingIn?: SortOrder
  }

  export type IpTvLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    url?: string
    AND?: IpTvLinkWhereInput | IpTvLinkWhereInput[]
    OR?: IpTvLinkWhereInput[]
    NOT?: IpTvLinkWhereInput | IpTvLinkWhereInput[]
    name?: StringFilter<"IpTvLink"> | string
    description?: StringNullableFilter<"IpTvLink"> | string | null
    createdAt?: DateTimeFilter<"IpTvLink"> | Date | string
    workingIn?: StringNullableListFilter<"IpTvLink">
  }, "id" | "url">

  export type IpTvLinkOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    workingIn?: SortOrder
    _count?: IpTvLinkCountOrderByAggregateInput
    _max?: IpTvLinkMaxOrderByAggregateInput
    _min?: IpTvLinkMinOrderByAggregateInput
  }

  export type IpTvLinkScalarWhereWithAggregatesInput = {
    AND?: IpTvLinkScalarWhereWithAggregatesInput | IpTvLinkScalarWhereWithAggregatesInput[]
    OR?: IpTvLinkScalarWhereWithAggregatesInput[]
    NOT?: IpTvLinkScalarWhereWithAggregatesInput | IpTvLinkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"IpTvLink"> | string
    name?: StringWithAggregatesFilter<"IpTvLink"> | string
    url?: StringWithAggregatesFilter<"IpTvLink"> | string
    description?: StringNullableWithAggregatesFilter<"IpTvLink"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"IpTvLink"> | Date | string
    workingIn?: StringNullableListFilter<"IpTvLink">
  }

  export type SpeedTestCreateInput = {
    id?: string
    isp: string
    city: string
    country: string
    download: number
    createdAt?: Date | string
  }

  export type SpeedTestUncheckedCreateInput = {
    id?: string
    isp: string
    city: string
    country: string
    download: number
    createdAt?: Date | string
  }

  export type SpeedTestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isp?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    download?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeedTestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isp?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    download?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeedTestCreateManyInput = {
    id?: string
    isp: string
    city: string
    country: string
    download: number
    createdAt?: Date | string
  }

  export type SpeedTestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isp?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    download?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpeedTestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    isp?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    download?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FtpLinkCreateInput = {
    id?: string
    name: string
    url: string
    description?: string | null
    createdAt?: Date | string
    workingIn?: FtpLinkCreateworkingInInput | string[]
  }

  export type FtpLinkUncheckedCreateInput = {
    id?: string
    name: string
    url: string
    description?: string | null
    createdAt?: Date | string
    workingIn?: FtpLinkCreateworkingInInput | string[]
  }

  export type FtpLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workingIn?: FtpLinkUpdateworkingInInput | string[]
  }

  export type FtpLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workingIn?: FtpLinkUpdateworkingInInput | string[]
  }

  export type FtpLinkCreateManyInput = {
    id?: string
    name: string
    url: string
    description?: string | null
    createdAt?: Date | string
    workingIn?: FtpLinkCreateworkingInInput | string[]
  }

  export type FtpLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workingIn?: FtpLinkUpdateworkingInInput | string[]
  }

  export type FtpLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workingIn?: FtpLinkUpdateworkingInInput | string[]
  }

  export type IpTvLinkCreateInput = {
    id?: string
    name: string
    url: string
    description?: string | null
    createdAt?: Date | string
    workingIn?: IpTvLinkCreateworkingInInput | string[]
  }

  export type IpTvLinkUncheckedCreateInput = {
    id?: string
    name: string
    url: string
    description?: string | null
    createdAt?: Date | string
    workingIn?: IpTvLinkCreateworkingInInput | string[]
  }

  export type IpTvLinkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workingIn?: IpTvLinkUpdateworkingInInput | string[]
  }

  export type IpTvLinkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workingIn?: IpTvLinkUpdateworkingInInput | string[]
  }

  export type IpTvLinkCreateManyInput = {
    id?: string
    name: string
    url: string
    description?: string | null
    createdAt?: Date | string
    workingIn?: IpTvLinkCreateworkingInInput | string[]
  }

  export type IpTvLinkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workingIn?: IpTvLinkUpdateworkingInInput | string[]
  }

  export type IpTvLinkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workingIn?: IpTvLinkUpdateworkingInInput | string[]
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SpeedTestCountOrderByAggregateInput = {
    id?: SortOrder
    isp?: SortOrder
    city?: SortOrder
    country?: SortOrder
    download?: SortOrder
    createdAt?: SortOrder
  }

  export type SpeedTestAvgOrderByAggregateInput = {
    download?: SortOrder
  }

  export type SpeedTestMaxOrderByAggregateInput = {
    id?: SortOrder
    isp?: SortOrder
    city?: SortOrder
    country?: SortOrder
    download?: SortOrder
    createdAt?: SortOrder
  }

  export type SpeedTestMinOrderByAggregateInput = {
    id?: SortOrder
    isp?: SortOrder
    city?: SortOrder
    country?: SortOrder
    download?: SortOrder
    createdAt?: SortOrder
  }

  export type SpeedTestSumOrderByAggregateInput = {
    download?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FtpLinkCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    workingIn?: SortOrder
  }

  export type FtpLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type FtpLinkMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IpTvLinkCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    workingIn?: SortOrder
  }

  export type IpTvLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type IpTvLinkMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FtpLinkCreateworkingInInput = {
    set: string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FtpLinkUpdateworkingInInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IpTvLinkCreateworkingInInput = {
    set: string[]
  }

  export type IpTvLinkUpdateworkingInInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}