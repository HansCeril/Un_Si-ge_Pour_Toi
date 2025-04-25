
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Covoiturage
 * 
 */
export type Covoiturage = $Result.DefaultSelection<Prisma.$CovoituragePayload>
/**
 * Model Conducteur
 * 
 */
export type Conducteur = $Result.DefaultSelection<Prisma.$ConducteurPayload>
/**
 * Model Passager
 * 
 */
export type Passager = $Result.DefaultSelection<Prisma.$PassagerPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model Lease
 * 
 */
export type Lease = $Result.DefaultSelection<Prisma.$LeasePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const CarType: {
  Berline: 'Berline',
  Break: 'Break',
  Coupe: 'Coupe',
  Cabriolet: 'Cabriolet',
  Suv: 'Suv'
};

export type CarType = (typeof CarType)[keyof typeof CarType]


export const ApplicationStatus: {
  Pending: 'Pending',
  Denied: 'Denied',
  Approved: 'Approved'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]


export const PaymentStatus: {
  Pending: 'Pending',
  Paid: 'Paid',
  PartiallyPaid: 'PartiallyPaid',
  Overdue: 'Overdue'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type CarType = $Enums.CarType

export const CarType: typeof $Enums.CarType

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Covoiturages
 * const covoiturages = await prisma.covoiturage.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Covoiturages
   * const covoiturages = await prisma.covoiturage.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.covoiturage`: Exposes CRUD operations for the **Covoiturage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Covoiturages
    * const covoiturages = await prisma.covoiturage.findMany()
    * ```
    */
  get covoiturage(): Prisma.CovoiturageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.conducteur`: Exposes CRUD operations for the **Conducteur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conducteurs
    * const conducteurs = await prisma.conducteur.findMany()
    * ```
    */
  get conducteur(): Prisma.ConducteurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passager`: Exposes CRUD operations for the **Passager** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Passagers
    * const passagers = await prisma.passager.findMany()
    * ```
    */
  get passager(): Prisma.PassagerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lease`: Exposes CRUD operations for the **Lease** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leases
    * const leases = await prisma.lease.findMany()
    * ```
    */
  get lease(): Prisma.LeaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Covoiturage: 'Covoiturage',
    Conducteur: 'Conducteur',
    Passager: 'Passager',
    Location: 'Location',
    Application: 'Application',
    Lease: 'Lease',
    Payment: 'Payment'
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
      modelProps: "covoiturage" | "conducteur" | "passager" | "location" | "application" | "lease" | "payment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Covoiturage: {
        payload: Prisma.$CovoituragePayload<ExtArgs>
        fields: Prisma.CovoiturageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CovoiturageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CovoituragePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CovoiturageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CovoituragePayload>
          }
          findFirst: {
            args: Prisma.CovoiturageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CovoituragePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CovoiturageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CovoituragePayload>
          }
          findMany: {
            args: Prisma.CovoiturageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CovoituragePayload>[]
          }
          create: {
            args: Prisma.CovoiturageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CovoituragePayload>
          }
          createMany: {
            args: Prisma.CovoiturageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CovoiturageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CovoituragePayload>[]
          }
          delete: {
            args: Prisma.CovoiturageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CovoituragePayload>
          }
          update: {
            args: Prisma.CovoiturageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CovoituragePayload>
          }
          deleteMany: {
            args: Prisma.CovoiturageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CovoiturageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CovoiturageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CovoituragePayload>[]
          }
          upsert: {
            args: Prisma.CovoiturageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CovoituragePayload>
          }
          aggregate: {
            args: Prisma.CovoiturageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCovoiturage>
          }
          groupBy: {
            args: Prisma.CovoiturageGroupByArgs<ExtArgs>
            result: $Utils.Optional<CovoiturageGroupByOutputType>[]
          }
          count: {
            args: Prisma.CovoiturageCountArgs<ExtArgs>
            result: $Utils.Optional<CovoiturageCountAggregateOutputType> | number
          }
        }
      }
      Conducteur: {
        payload: Prisma.$ConducteurPayload<ExtArgs>
        fields: Prisma.ConducteurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConducteurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConducteurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConducteurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConducteurPayload>
          }
          findFirst: {
            args: Prisma.ConducteurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConducteurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConducteurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConducteurPayload>
          }
          findMany: {
            args: Prisma.ConducteurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConducteurPayload>[]
          }
          create: {
            args: Prisma.ConducteurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConducteurPayload>
          }
          createMany: {
            args: Prisma.ConducteurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConducteurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConducteurPayload>[]
          }
          delete: {
            args: Prisma.ConducteurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConducteurPayload>
          }
          update: {
            args: Prisma.ConducteurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConducteurPayload>
          }
          deleteMany: {
            args: Prisma.ConducteurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConducteurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConducteurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConducteurPayload>[]
          }
          upsert: {
            args: Prisma.ConducteurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConducteurPayload>
          }
          aggregate: {
            args: Prisma.ConducteurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConducteur>
          }
          groupBy: {
            args: Prisma.ConducteurGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConducteurGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConducteurCountArgs<ExtArgs>
            result: $Utils.Optional<ConducteurCountAggregateOutputType> | number
          }
        }
      }
      Passager: {
        payload: Prisma.$PassagerPayload<ExtArgs>
        fields: Prisma.PassagerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PassagerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassagerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PassagerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassagerPayload>
          }
          findFirst: {
            args: Prisma.PassagerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassagerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PassagerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassagerPayload>
          }
          findMany: {
            args: Prisma.PassagerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassagerPayload>[]
          }
          create: {
            args: Prisma.PassagerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassagerPayload>
          }
          createMany: {
            args: Prisma.PassagerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PassagerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassagerPayload>[]
          }
          delete: {
            args: Prisma.PassagerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassagerPayload>
          }
          update: {
            args: Prisma.PassagerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassagerPayload>
          }
          deleteMany: {
            args: Prisma.PassagerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PassagerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PassagerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassagerPayload>[]
          }
          upsert: {
            args: Prisma.PassagerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassagerPayload>
          }
          aggregate: {
            args: Prisma.PassagerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassager>
          }
          groupBy: {
            args: Prisma.PassagerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PassagerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PassagerCountArgs<ExtArgs>
            result: $Utils.Optional<PassagerCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      Lease: {
        payload: Prisma.$LeasePayload<ExtArgs>
        fields: Prisma.LeaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          findFirst: {
            args: Prisma.LeaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          findMany: {
            args: Prisma.LeaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>[]
          }
          create: {
            args: Prisma.LeaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          createMany: {
            args: Prisma.LeaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>[]
          }
          delete: {
            args: Prisma.LeaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          update: {
            args: Prisma.LeaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          deleteMany: {
            args: Prisma.LeaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>[]
          }
          upsert: {
            args: Prisma.LeaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeasePayload>
          }
          aggregate: {
            args: Prisma.LeaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLease>
          }
          groupBy: {
            args: Prisma.LeaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaseCountArgs<ExtArgs>
            result: $Utils.Optional<LeaseCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    covoiturage?: CovoiturageOmit
    conducteur?: ConducteurOmit
    passager?: PassagerOmit
    location?: LocationOmit
    application?: ApplicationOmit
    lease?: LeaseOmit
    payment?: PaymentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CovoiturageCountOutputType
   */

  export type CovoiturageCountOutputType = {
    leases: number
    applications: number
    favoritedBy: number
    passagers: number
  }

  export type CovoiturageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leases?: boolean | CovoiturageCountOutputTypeCountLeasesArgs
    applications?: boolean | CovoiturageCountOutputTypeCountApplicationsArgs
    favoritedBy?: boolean | CovoiturageCountOutputTypeCountFavoritedByArgs
    passagers?: boolean | CovoiturageCountOutputTypeCountPassagersArgs
  }

  // Custom InputTypes
  /**
   * CovoiturageCountOutputType without action
   */
  export type CovoiturageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CovoiturageCountOutputType
     */
    select?: CovoiturageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CovoiturageCountOutputType without action
   */
  export type CovoiturageCountOutputTypeCountLeasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseWhereInput
  }

  /**
   * CovoiturageCountOutputType without action
   */
  export type CovoiturageCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * CovoiturageCountOutputType without action
   */
  export type CovoiturageCountOutputTypeCountFavoritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PassagerWhereInput
  }

  /**
   * CovoiturageCountOutputType without action
   */
  export type CovoiturageCountOutputTypeCountPassagersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PassagerWhereInput
  }


  /**
   * Count Type ConducteurCountOutputType
   */

  export type ConducteurCountOutputType = {
    conducteurCovoiturages: number
  }

  export type ConducteurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conducteurCovoiturages?: boolean | ConducteurCountOutputTypeCountConducteurCovoituragesArgs
  }

  // Custom InputTypes
  /**
   * ConducteurCountOutputType without action
   */
  export type ConducteurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConducteurCountOutputType
     */
    select?: ConducteurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ConducteurCountOutputType without action
   */
  export type ConducteurCountOutputTypeCountConducteurCovoituragesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CovoiturageWhereInput
  }


  /**
   * Count Type PassagerCountOutputType
   */

  export type PassagerCountOutputType = {
    covoiturages: number
    favorites: number
    applications: number
    leases: number
  }

  export type PassagerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    covoiturages?: boolean | PassagerCountOutputTypeCountCovoituragesArgs
    favorites?: boolean | PassagerCountOutputTypeCountFavoritesArgs
    applications?: boolean | PassagerCountOutputTypeCountApplicationsArgs
    leases?: boolean | PassagerCountOutputTypeCountLeasesArgs
  }

  // Custom InputTypes
  /**
   * PassagerCountOutputType without action
   */
  export type PassagerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassagerCountOutputType
     */
    select?: PassagerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PassagerCountOutputType without action
   */
  export type PassagerCountOutputTypeCountCovoituragesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CovoiturageWhereInput
  }

  /**
   * PassagerCountOutputType without action
   */
  export type PassagerCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CovoiturageWhereInput
  }

  /**
   * PassagerCountOutputType without action
   */
  export type PassagerCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * PassagerCountOutputType without action
   */
  export type PassagerCountOutputTypeCountLeasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    covoiturages: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    covoiturages?: boolean | LocationCountOutputTypeCountCovoituragesArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountCovoituragesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CovoiturageWhereInput
  }


  /**
   * Count Type LeaseCountOutputType
   */

  export type LeaseCountOutputType = {
    payments: number
  }

  export type LeaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | LeaseCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * LeaseCountOutputType without action
   */
  export type LeaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaseCountOutputType
     */
    select?: LeaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeaseCountOutputType without action
   */
  export type LeaseCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Covoiturage
   */

  export type AggregateCovoiturage = {
    _count: CovoiturageCountAggregateOutputType | null
    _avg: CovoiturageAvgAggregateOutputType | null
    _sum: CovoiturageSumAggregateOutputType | null
    _min: CovoiturageMinAggregateOutputType | null
    _max: CovoiturageMaxAggregateOutputType | null
  }

  export type CovoiturageAvgAggregateOutputType = {
    id: number | null
    averageRating: number | null
    numberOfReviews: number | null
    locationId: number | null
  }

  export type CovoiturageSumAggregateOutputType = {
    id: number | null
    averageRating: number | null
    numberOfReviews: number | null
    locationId: number | null
  }

  export type CovoiturageMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isPetsAllowed: boolean | null
    carType: $Enums.CarType | null
    postedDate: Date | null
    averageRating: number | null
    numberOfReviews: number | null
    locationId: number | null
    conducteurCognitoId: string | null
  }

  export type CovoiturageMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    isPetsAllowed: boolean | null
    carType: $Enums.CarType | null
    postedDate: Date | null
    averageRating: number | null
    numberOfReviews: number | null
    locationId: number | null
    conducteurCognitoId: string | null
  }

  export type CovoiturageCountAggregateOutputType = {
    id: number
    name: number
    description: number
    photoUrls: number
    isPetsAllowed: number
    carType: number
    postedDate: number
    averageRating: number
    numberOfReviews: number
    locationId: number
    conducteurCognitoId: number
    _all: number
  }


  export type CovoiturageAvgAggregateInputType = {
    id?: true
    averageRating?: true
    numberOfReviews?: true
    locationId?: true
  }

  export type CovoiturageSumAggregateInputType = {
    id?: true
    averageRating?: true
    numberOfReviews?: true
    locationId?: true
  }

  export type CovoiturageMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPetsAllowed?: true
    carType?: true
    postedDate?: true
    averageRating?: true
    numberOfReviews?: true
    locationId?: true
    conducteurCognitoId?: true
  }

  export type CovoiturageMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isPetsAllowed?: true
    carType?: true
    postedDate?: true
    averageRating?: true
    numberOfReviews?: true
    locationId?: true
    conducteurCognitoId?: true
  }

  export type CovoiturageCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    photoUrls?: true
    isPetsAllowed?: true
    carType?: true
    postedDate?: true
    averageRating?: true
    numberOfReviews?: true
    locationId?: true
    conducteurCognitoId?: true
    _all?: true
  }

  export type CovoiturageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Covoiturage to aggregate.
     */
    where?: CovoiturageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Covoiturages to fetch.
     */
    orderBy?: CovoiturageOrderByWithRelationInput | CovoiturageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CovoiturageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Covoiturages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Covoiturages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Covoiturages
    **/
    _count?: true | CovoiturageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CovoiturageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CovoiturageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CovoiturageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CovoiturageMaxAggregateInputType
  }

  export type GetCovoiturageAggregateType<T extends CovoiturageAggregateArgs> = {
        [P in keyof T & keyof AggregateCovoiturage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCovoiturage[P]>
      : GetScalarType<T[P], AggregateCovoiturage[P]>
  }




  export type CovoiturageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CovoiturageWhereInput
    orderBy?: CovoiturageOrderByWithAggregationInput | CovoiturageOrderByWithAggregationInput[]
    by: CovoiturageScalarFieldEnum[] | CovoiturageScalarFieldEnum
    having?: CovoiturageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CovoiturageCountAggregateInputType | true
    _avg?: CovoiturageAvgAggregateInputType
    _sum?: CovoiturageSumAggregateInputType
    _min?: CovoiturageMinAggregateInputType
    _max?: CovoiturageMaxAggregateInputType
  }

  export type CovoiturageGroupByOutputType = {
    id: number
    name: string
    description: string
    photoUrls: string[]
    isPetsAllowed: boolean
    carType: $Enums.CarType
    postedDate: Date
    averageRating: number | null
    numberOfReviews: number | null
    locationId: number
    conducteurCognitoId: string
    _count: CovoiturageCountAggregateOutputType | null
    _avg: CovoiturageAvgAggregateOutputType | null
    _sum: CovoiturageSumAggregateOutputType | null
    _min: CovoiturageMinAggregateOutputType | null
    _max: CovoiturageMaxAggregateOutputType | null
  }

  type GetCovoiturageGroupByPayload<T extends CovoiturageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CovoiturageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CovoiturageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CovoiturageGroupByOutputType[P]>
            : GetScalarType<T[P], CovoiturageGroupByOutputType[P]>
        }
      >
    >


  export type CovoiturageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    photoUrls?: boolean
    isPetsAllowed?: boolean
    carType?: boolean
    postedDate?: boolean
    averageRating?: boolean
    numberOfReviews?: boolean
    locationId?: boolean
    conducteurCognitoId?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    conducteur?: boolean | ConducteurDefaultArgs<ExtArgs>
    leases?: boolean | Covoiturage$leasesArgs<ExtArgs>
    applications?: boolean | Covoiturage$applicationsArgs<ExtArgs>
    favoritedBy?: boolean | Covoiturage$favoritedByArgs<ExtArgs>
    passagers?: boolean | Covoiturage$passagersArgs<ExtArgs>
    _count?: boolean | CovoiturageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["covoiturage"]>

  export type CovoiturageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    photoUrls?: boolean
    isPetsAllowed?: boolean
    carType?: boolean
    postedDate?: boolean
    averageRating?: boolean
    numberOfReviews?: boolean
    locationId?: boolean
    conducteurCognitoId?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    conducteur?: boolean | ConducteurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["covoiturage"]>

  export type CovoiturageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    photoUrls?: boolean
    isPetsAllowed?: boolean
    carType?: boolean
    postedDate?: boolean
    averageRating?: boolean
    numberOfReviews?: boolean
    locationId?: boolean
    conducteurCognitoId?: boolean
    location?: boolean | LocationDefaultArgs<ExtArgs>
    conducteur?: boolean | ConducteurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["covoiturage"]>

  export type CovoiturageSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    photoUrls?: boolean
    isPetsAllowed?: boolean
    carType?: boolean
    postedDate?: boolean
    averageRating?: boolean
    numberOfReviews?: boolean
    locationId?: boolean
    conducteurCognitoId?: boolean
  }

  export type CovoiturageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "photoUrls" | "isPetsAllowed" | "carType" | "postedDate" | "averageRating" | "numberOfReviews" | "locationId" | "conducteurCognitoId", ExtArgs["result"]["covoiturage"]>
  export type CovoiturageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    conducteur?: boolean | ConducteurDefaultArgs<ExtArgs>
    leases?: boolean | Covoiturage$leasesArgs<ExtArgs>
    applications?: boolean | Covoiturage$applicationsArgs<ExtArgs>
    favoritedBy?: boolean | Covoiturage$favoritedByArgs<ExtArgs>
    passagers?: boolean | Covoiturage$passagersArgs<ExtArgs>
    _count?: boolean | CovoiturageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CovoiturageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    conducteur?: boolean | ConducteurDefaultArgs<ExtArgs>
  }
  export type CovoiturageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | LocationDefaultArgs<ExtArgs>
    conducteur?: boolean | ConducteurDefaultArgs<ExtArgs>
  }

  export type $CovoituragePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Covoiturage"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs>
      conducteur: Prisma.$ConducteurPayload<ExtArgs>
      leases: Prisma.$LeasePayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      favoritedBy: Prisma.$PassagerPayload<ExtArgs>[]
      passagers: Prisma.$PassagerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      photoUrls: string[]
      isPetsAllowed: boolean
      carType: $Enums.CarType
      postedDate: Date
      averageRating: number | null
      numberOfReviews: number | null
      locationId: number
      conducteurCognitoId: string
    }, ExtArgs["result"]["covoiturage"]>
    composites: {}
  }

  type CovoiturageGetPayload<S extends boolean | null | undefined | CovoiturageDefaultArgs> = $Result.GetResult<Prisma.$CovoituragePayload, S>

  type CovoiturageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CovoiturageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CovoiturageCountAggregateInputType | true
    }

  export interface CovoiturageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Covoiturage'], meta: { name: 'Covoiturage' } }
    /**
     * Find zero or one Covoiturage that matches the filter.
     * @param {CovoiturageFindUniqueArgs} args - Arguments to find a Covoiturage
     * @example
     * // Get one Covoiturage
     * const covoiturage = await prisma.covoiturage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CovoiturageFindUniqueArgs>(args: SelectSubset<T, CovoiturageFindUniqueArgs<ExtArgs>>): Prisma__CovoiturageClient<$Result.GetResult<Prisma.$CovoituragePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Covoiturage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CovoiturageFindUniqueOrThrowArgs} args - Arguments to find a Covoiturage
     * @example
     * // Get one Covoiturage
     * const covoiturage = await prisma.covoiturage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CovoiturageFindUniqueOrThrowArgs>(args: SelectSubset<T, CovoiturageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CovoiturageClient<$Result.GetResult<Prisma.$CovoituragePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Covoiturage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CovoiturageFindFirstArgs} args - Arguments to find a Covoiturage
     * @example
     * // Get one Covoiturage
     * const covoiturage = await prisma.covoiturage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CovoiturageFindFirstArgs>(args?: SelectSubset<T, CovoiturageFindFirstArgs<ExtArgs>>): Prisma__CovoiturageClient<$Result.GetResult<Prisma.$CovoituragePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Covoiturage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CovoiturageFindFirstOrThrowArgs} args - Arguments to find a Covoiturage
     * @example
     * // Get one Covoiturage
     * const covoiturage = await prisma.covoiturage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CovoiturageFindFirstOrThrowArgs>(args?: SelectSubset<T, CovoiturageFindFirstOrThrowArgs<ExtArgs>>): Prisma__CovoiturageClient<$Result.GetResult<Prisma.$CovoituragePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Covoiturages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CovoiturageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Covoiturages
     * const covoiturages = await prisma.covoiturage.findMany()
     * 
     * // Get first 10 Covoiturages
     * const covoiturages = await prisma.covoiturage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const covoiturageWithIdOnly = await prisma.covoiturage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CovoiturageFindManyArgs>(args?: SelectSubset<T, CovoiturageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CovoituragePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Covoiturage.
     * @param {CovoiturageCreateArgs} args - Arguments to create a Covoiturage.
     * @example
     * // Create one Covoiturage
     * const Covoiturage = await prisma.covoiturage.create({
     *   data: {
     *     // ... data to create a Covoiturage
     *   }
     * })
     * 
     */
    create<T extends CovoiturageCreateArgs>(args: SelectSubset<T, CovoiturageCreateArgs<ExtArgs>>): Prisma__CovoiturageClient<$Result.GetResult<Prisma.$CovoituragePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Covoiturages.
     * @param {CovoiturageCreateManyArgs} args - Arguments to create many Covoiturages.
     * @example
     * // Create many Covoiturages
     * const covoiturage = await prisma.covoiturage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CovoiturageCreateManyArgs>(args?: SelectSubset<T, CovoiturageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Covoiturages and returns the data saved in the database.
     * @param {CovoiturageCreateManyAndReturnArgs} args - Arguments to create many Covoiturages.
     * @example
     * // Create many Covoiturages
     * const covoiturage = await prisma.covoiturage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Covoiturages and only return the `id`
     * const covoiturageWithIdOnly = await prisma.covoiturage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CovoiturageCreateManyAndReturnArgs>(args?: SelectSubset<T, CovoiturageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CovoituragePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Covoiturage.
     * @param {CovoiturageDeleteArgs} args - Arguments to delete one Covoiturage.
     * @example
     * // Delete one Covoiturage
     * const Covoiturage = await prisma.covoiturage.delete({
     *   where: {
     *     // ... filter to delete one Covoiturage
     *   }
     * })
     * 
     */
    delete<T extends CovoiturageDeleteArgs>(args: SelectSubset<T, CovoiturageDeleteArgs<ExtArgs>>): Prisma__CovoiturageClient<$Result.GetResult<Prisma.$CovoituragePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Covoiturage.
     * @param {CovoiturageUpdateArgs} args - Arguments to update one Covoiturage.
     * @example
     * // Update one Covoiturage
     * const covoiturage = await prisma.covoiturage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CovoiturageUpdateArgs>(args: SelectSubset<T, CovoiturageUpdateArgs<ExtArgs>>): Prisma__CovoiturageClient<$Result.GetResult<Prisma.$CovoituragePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Covoiturages.
     * @param {CovoiturageDeleteManyArgs} args - Arguments to filter Covoiturages to delete.
     * @example
     * // Delete a few Covoiturages
     * const { count } = await prisma.covoiturage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CovoiturageDeleteManyArgs>(args?: SelectSubset<T, CovoiturageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Covoiturages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CovoiturageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Covoiturages
     * const covoiturage = await prisma.covoiturage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CovoiturageUpdateManyArgs>(args: SelectSubset<T, CovoiturageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Covoiturages and returns the data updated in the database.
     * @param {CovoiturageUpdateManyAndReturnArgs} args - Arguments to update many Covoiturages.
     * @example
     * // Update many Covoiturages
     * const covoiturage = await prisma.covoiturage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Covoiturages and only return the `id`
     * const covoiturageWithIdOnly = await prisma.covoiturage.updateManyAndReturn({
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
    updateManyAndReturn<T extends CovoiturageUpdateManyAndReturnArgs>(args: SelectSubset<T, CovoiturageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CovoituragePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Covoiturage.
     * @param {CovoiturageUpsertArgs} args - Arguments to update or create a Covoiturage.
     * @example
     * // Update or create a Covoiturage
     * const covoiturage = await prisma.covoiturage.upsert({
     *   create: {
     *     // ... data to create a Covoiturage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Covoiturage we want to update
     *   }
     * })
     */
    upsert<T extends CovoiturageUpsertArgs>(args: SelectSubset<T, CovoiturageUpsertArgs<ExtArgs>>): Prisma__CovoiturageClient<$Result.GetResult<Prisma.$CovoituragePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Covoiturages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CovoiturageCountArgs} args - Arguments to filter Covoiturages to count.
     * @example
     * // Count the number of Covoiturages
     * const count = await prisma.covoiturage.count({
     *   where: {
     *     // ... the filter for the Covoiturages we want to count
     *   }
     * })
    **/
    count<T extends CovoiturageCountArgs>(
      args?: Subset<T, CovoiturageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CovoiturageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Covoiturage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CovoiturageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CovoiturageAggregateArgs>(args: Subset<T, CovoiturageAggregateArgs>): Prisma.PrismaPromise<GetCovoiturageAggregateType<T>>

    /**
     * Group by Covoiturage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CovoiturageGroupByArgs} args - Group by arguments.
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
      T extends CovoiturageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CovoiturageGroupByArgs['orderBy'] }
        : { orderBy?: CovoiturageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CovoiturageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCovoiturageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Covoiturage model
   */
  readonly fields: CovoiturageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Covoiturage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CovoiturageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends LocationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LocationDefaultArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conducteur<T extends ConducteurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ConducteurDefaultArgs<ExtArgs>>): Prisma__ConducteurClient<$Result.GetResult<Prisma.$ConducteurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leases<T extends Covoiturage$leasesArgs<ExtArgs> = {}>(args?: Subset<T, Covoiturage$leasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends Covoiturage$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Covoiturage$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favoritedBy<T extends Covoiturage$favoritedByArgs<ExtArgs> = {}>(args?: Subset<T, Covoiturage$favoritedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassagerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passagers<T extends Covoiturage$passagersArgs<ExtArgs> = {}>(args?: Subset<T, Covoiturage$passagersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassagerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Covoiturage model
   */
  interface CovoiturageFieldRefs {
    readonly id: FieldRef<"Covoiturage", 'Int'>
    readonly name: FieldRef<"Covoiturage", 'String'>
    readonly description: FieldRef<"Covoiturage", 'String'>
    readonly photoUrls: FieldRef<"Covoiturage", 'String[]'>
    readonly isPetsAllowed: FieldRef<"Covoiturage", 'Boolean'>
    readonly carType: FieldRef<"Covoiturage", 'CarType'>
    readonly postedDate: FieldRef<"Covoiturage", 'DateTime'>
    readonly averageRating: FieldRef<"Covoiturage", 'Float'>
    readonly numberOfReviews: FieldRef<"Covoiturage", 'Int'>
    readonly locationId: FieldRef<"Covoiturage", 'Int'>
    readonly conducteurCognitoId: FieldRef<"Covoiturage", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Covoiturage findUnique
   */
  export type CovoiturageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covoiturage
     */
    select?: CovoiturageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Covoiturage
     */
    omit?: CovoiturageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovoiturageInclude<ExtArgs> | null
    /**
     * Filter, which Covoiturage to fetch.
     */
    where: CovoiturageWhereUniqueInput
  }

  /**
   * Covoiturage findUniqueOrThrow
   */
  export type CovoiturageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covoiturage
     */
    select?: CovoiturageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Covoiturage
     */
    omit?: CovoiturageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovoiturageInclude<ExtArgs> | null
    /**
     * Filter, which Covoiturage to fetch.
     */
    where: CovoiturageWhereUniqueInput
  }

  /**
   * Covoiturage findFirst
   */
  export type CovoiturageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covoiturage
     */
    select?: CovoiturageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Covoiturage
     */
    omit?: CovoiturageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovoiturageInclude<ExtArgs> | null
    /**
     * Filter, which Covoiturage to fetch.
     */
    where?: CovoiturageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Covoiturages to fetch.
     */
    orderBy?: CovoiturageOrderByWithRelationInput | CovoiturageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Covoiturages.
     */
    cursor?: CovoiturageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Covoiturages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Covoiturages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Covoiturages.
     */
    distinct?: CovoiturageScalarFieldEnum | CovoiturageScalarFieldEnum[]
  }

  /**
   * Covoiturage findFirstOrThrow
   */
  export type CovoiturageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covoiturage
     */
    select?: CovoiturageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Covoiturage
     */
    omit?: CovoiturageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovoiturageInclude<ExtArgs> | null
    /**
     * Filter, which Covoiturage to fetch.
     */
    where?: CovoiturageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Covoiturages to fetch.
     */
    orderBy?: CovoiturageOrderByWithRelationInput | CovoiturageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Covoiturages.
     */
    cursor?: CovoiturageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Covoiturages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Covoiturages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Covoiturages.
     */
    distinct?: CovoiturageScalarFieldEnum | CovoiturageScalarFieldEnum[]
  }

  /**
   * Covoiturage findMany
   */
  export type CovoiturageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covoiturage
     */
    select?: CovoiturageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Covoiturage
     */
    omit?: CovoiturageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovoiturageInclude<ExtArgs> | null
    /**
     * Filter, which Covoiturages to fetch.
     */
    where?: CovoiturageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Covoiturages to fetch.
     */
    orderBy?: CovoiturageOrderByWithRelationInput | CovoiturageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Covoiturages.
     */
    cursor?: CovoiturageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Covoiturages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Covoiturages.
     */
    skip?: number
    distinct?: CovoiturageScalarFieldEnum | CovoiturageScalarFieldEnum[]
  }

  /**
   * Covoiturage create
   */
  export type CovoiturageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covoiturage
     */
    select?: CovoiturageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Covoiturage
     */
    omit?: CovoiturageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovoiturageInclude<ExtArgs> | null
    /**
     * The data needed to create a Covoiturage.
     */
    data: XOR<CovoiturageCreateInput, CovoiturageUncheckedCreateInput>
  }

  /**
   * Covoiturage createMany
   */
  export type CovoiturageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Covoiturages.
     */
    data: CovoiturageCreateManyInput | CovoiturageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Covoiturage createManyAndReturn
   */
  export type CovoiturageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covoiturage
     */
    select?: CovoiturageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Covoiturage
     */
    omit?: CovoiturageOmit<ExtArgs> | null
    /**
     * The data used to create many Covoiturages.
     */
    data: CovoiturageCreateManyInput | CovoiturageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovoiturageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Covoiturage update
   */
  export type CovoiturageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covoiturage
     */
    select?: CovoiturageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Covoiturage
     */
    omit?: CovoiturageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovoiturageInclude<ExtArgs> | null
    /**
     * The data needed to update a Covoiturage.
     */
    data: XOR<CovoiturageUpdateInput, CovoiturageUncheckedUpdateInput>
    /**
     * Choose, which Covoiturage to update.
     */
    where: CovoiturageWhereUniqueInput
  }

  /**
   * Covoiturage updateMany
   */
  export type CovoiturageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Covoiturages.
     */
    data: XOR<CovoiturageUpdateManyMutationInput, CovoiturageUncheckedUpdateManyInput>
    /**
     * Filter which Covoiturages to update
     */
    where?: CovoiturageWhereInput
    /**
     * Limit how many Covoiturages to update.
     */
    limit?: number
  }

  /**
   * Covoiturage updateManyAndReturn
   */
  export type CovoiturageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covoiturage
     */
    select?: CovoiturageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Covoiturage
     */
    omit?: CovoiturageOmit<ExtArgs> | null
    /**
     * The data used to update Covoiturages.
     */
    data: XOR<CovoiturageUpdateManyMutationInput, CovoiturageUncheckedUpdateManyInput>
    /**
     * Filter which Covoiturages to update
     */
    where?: CovoiturageWhereInput
    /**
     * Limit how many Covoiturages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovoiturageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Covoiturage upsert
   */
  export type CovoiturageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covoiturage
     */
    select?: CovoiturageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Covoiturage
     */
    omit?: CovoiturageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovoiturageInclude<ExtArgs> | null
    /**
     * The filter to search for the Covoiturage to update in case it exists.
     */
    where: CovoiturageWhereUniqueInput
    /**
     * In case the Covoiturage found by the `where` argument doesn't exist, create a new Covoiturage with this data.
     */
    create: XOR<CovoiturageCreateInput, CovoiturageUncheckedCreateInput>
    /**
     * In case the Covoiturage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CovoiturageUpdateInput, CovoiturageUncheckedUpdateInput>
  }

  /**
   * Covoiturage delete
   */
  export type CovoiturageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covoiturage
     */
    select?: CovoiturageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Covoiturage
     */
    omit?: CovoiturageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovoiturageInclude<ExtArgs> | null
    /**
     * Filter which Covoiturage to delete.
     */
    where: CovoiturageWhereUniqueInput
  }

  /**
   * Covoiturage deleteMany
   */
  export type CovoiturageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Covoiturages to delete
     */
    where?: CovoiturageWhereInput
    /**
     * Limit how many Covoiturages to delete.
     */
    limit?: number
  }

  /**
   * Covoiturage.leases
   */
  export type Covoiturage$leasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    cursor?: LeaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Covoiturage.applications
   */
  export type Covoiturage$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Covoiturage.favoritedBy
   */
  export type Covoiturage$favoritedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passager
     */
    select?: PassagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passager
     */
    omit?: PassagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassagerInclude<ExtArgs> | null
    where?: PassagerWhereInput
    orderBy?: PassagerOrderByWithRelationInput | PassagerOrderByWithRelationInput[]
    cursor?: PassagerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PassagerScalarFieldEnum | PassagerScalarFieldEnum[]
  }

  /**
   * Covoiturage.passagers
   */
  export type Covoiturage$passagersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passager
     */
    select?: PassagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passager
     */
    omit?: PassagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassagerInclude<ExtArgs> | null
    where?: PassagerWhereInput
    orderBy?: PassagerOrderByWithRelationInput | PassagerOrderByWithRelationInput[]
    cursor?: PassagerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PassagerScalarFieldEnum | PassagerScalarFieldEnum[]
  }

  /**
   * Covoiturage without action
   */
  export type CovoiturageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covoiturage
     */
    select?: CovoiturageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Covoiturage
     */
    omit?: CovoiturageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovoiturageInclude<ExtArgs> | null
  }


  /**
   * Model Conducteur
   */

  export type AggregateConducteur = {
    _count: ConducteurCountAggregateOutputType | null
    _avg: ConducteurAvgAggregateOutputType | null
    _sum: ConducteurSumAggregateOutputType | null
    _min: ConducteurMinAggregateOutputType | null
    _max: ConducteurMaxAggregateOutputType | null
  }

  export type ConducteurAvgAggregateOutputType = {
    id: number | null
  }

  export type ConducteurSumAggregateOutputType = {
    id: number | null
  }

  export type ConducteurMinAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
  }

  export type ConducteurMaxAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
  }

  export type ConducteurCountAggregateOutputType = {
    id: number
    cognitoId: number
    name: number
    email: number
    phoneNumber: number
    _all: number
  }


  export type ConducteurAvgAggregateInputType = {
    id?: true
  }

  export type ConducteurSumAggregateInputType = {
    id?: true
  }

  export type ConducteurMinAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
  }

  export type ConducteurMaxAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
  }

  export type ConducteurCountAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
    _all?: true
  }

  export type ConducteurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conducteur to aggregate.
     */
    where?: ConducteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conducteurs to fetch.
     */
    orderBy?: ConducteurOrderByWithRelationInput | ConducteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConducteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conducteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conducteurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conducteurs
    **/
    _count?: true | ConducteurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConducteurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConducteurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConducteurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConducteurMaxAggregateInputType
  }

  export type GetConducteurAggregateType<T extends ConducteurAggregateArgs> = {
        [P in keyof T & keyof AggregateConducteur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConducteur[P]>
      : GetScalarType<T[P], AggregateConducteur[P]>
  }




  export type ConducteurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConducteurWhereInput
    orderBy?: ConducteurOrderByWithAggregationInput | ConducteurOrderByWithAggregationInput[]
    by: ConducteurScalarFieldEnum[] | ConducteurScalarFieldEnum
    having?: ConducteurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConducteurCountAggregateInputType | true
    _avg?: ConducteurAvgAggregateInputType
    _sum?: ConducteurSumAggregateInputType
    _min?: ConducteurMinAggregateInputType
    _max?: ConducteurMaxAggregateInputType
  }

  export type ConducteurGroupByOutputType = {
    id: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    _count: ConducteurCountAggregateOutputType | null
    _avg: ConducteurAvgAggregateOutputType | null
    _sum: ConducteurSumAggregateOutputType | null
    _min: ConducteurMinAggregateOutputType | null
    _max: ConducteurMaxAggregateOutputType | null
  }

  type GetConducteurGroupByPayload<T extends ConducteurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConducteurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConducteurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConducteurGroupByOutputType[P]>
            : GetScalarType<T[P], ConducteurGroupByOutputType[P]>
        }
      >
    >


  export type ConducteurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    conducteurCovoiturages?: boolean | Conducteur$conducteurCovoituragesArgs<ExtArgs>
    _count?: boolean | ConducteurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["conducteur"]>

  export type ConducteurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["conducteur"]>

  export type ConducteurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["conducteur"]>

  export type ConducteurSelectScalar = {
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }

  export type ConducteurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cognitoId" | "name" | "email" | "phoneNumber", ExtArgs["result"]["conducteur"]>
  export type ConducteurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    conducteurCovoiturages?: boolean | Conducteur$conducteurCovoituragesArgs<ExtArgs>
    _count?: boolean | ConducteurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ConducteurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ConducteurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ConducteurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Conducteur"
    objects: {
      conducteurCovoiturages: Prisma.$CovoituragePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cognitoId: string
      name: string
      email: string
      phoneNumber: string
    }, ExtArgs["result"]["conducteur"]>
    composites: {}
  }

  type ConducteurGetPayload<S extends boolean | null | undefined | ConducteurDefaultArgs> = $Result.GetResult<Prisma.$ConducteurPayload, S>

  type ConducteurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConducteurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConducteurCountAggregateInputType | true
    }

  export interface ConducteurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Conducteur'], meta: { name: 'Conducteur' } }
    /**
     * Find zero or one Conducteur that matches the filter.
     * @param {ConducteurFindUniqueArgs} args - Arguments to find a Conducteur
     * @example
     * // Get one Conducteur
     * const conducteur = await prisma.conducteur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConducteurFindUniqueArgs>(args: SelectSubset<T, ConducteurFindUniqueArgs<ExtArgs>>): Prisma__ConducteurClient<$Result.GetResult<Prisma.$ConducteurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Conducteur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConducteurFindUniqueOrThrowArgs} args - Arguments to find a Conducteur
     * @example
     * // Get one Conducteur
     * const conducteur = await prisma.conducteur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConducteurFindUniqueOrThrowArgs>(args: SelectSubset<T, ConducteurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConducteurClient<$Result.GetResult<Prisma.$ConducteurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conducteur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConducteurFindFirstArgs} args - Arguments to find a Conducteur
     * @example
     * // Get one Conducteur
     * const conducteur = await prisma.conducteur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConducteurFindFirstArgs>(args?: SelectSubset<T, ConducteurFindFirstArgs<ExtArgs>>): Prisma__ConducteurClient<$Result.GetResult<Prisma.$ConducteurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Conducteur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConducteurFindFirstOrThrowArgs} args - Arguments to find a Conducteur
     * @example
     * // Get one Conducteur
     * const conducteur = await prisma.conducteur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConducteurFindFirstOrThrowArgs>(args?: SelectSubset<T, ConducteurFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConducteurClient<$Result.GetResult<Prisma.$ConducteurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conducteurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConducteurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conducteurs
     * const conducteurs = await prisma.conducteur.findMany()
     * 
     * // Get first 10 Conducteurs
     * const conducteurs = await prisma.conducteur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conducteurWithIdOnly = await prisma.conducteur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConducteurFindManyArgs>(args?: SelectSubset<T, ConducteurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConducteurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Conducteur.
     * @param {ConducteurCreateArgs} args - Arguments to create a Conducteur.
     * @example
     * // Create one Conducteur
     * const Conducteur = await prisma.conducteur.create({
     *   data: {
     *     // ... data to create a Conducteur
     *   }
     * })
     * 
     */
    create<T extends ConducteurCreateArgs>(args: SelectSubset<T, ConducteurCreateArgs<ExtArgs>>): Prisma__ConducteurClient<$Result.GetResult<Prisma.$ConducteurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conducteurs.
     * @param {ConducteurCreateManyArgs} args - Arguments to create many Conducteurs.
     * @example
     * // Create many Conducteurs
     * const conducteur = await prisma.conducteur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConducteurCreateManyArgs>(args?: SelectSubset<T, ConducteurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conducteurs and returns the data saved in the database.
     * @param {ConducteurCreateManyAndReturnArgs} args - Arguments to create many Conducteurs.
     * @example
     * // Create many Conducteurs
     * const conducteur = await prisma.conducteur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conducteurs and only return the `id`
     * const conducteurWithIdOnly = await prisma.conducteur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConducteurCreateManyAndReturnArgs>(args?: SelectSubset<T, ConducteurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConducteurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Conducteur.
     * @param {ConducteurDeleteArgs} args - Arguments to delete one Conducteur.
     * @example
     * // Delete one Conducteur
     * const Conducteur = await prisma.conducteur.delete({
     *   where: {
     *     // ... filter to delete one Conducteur
     *   }
     * })
     * 
     */
    delete<T extends ConducteurDeleteArgs>(args: SelectSubset<T, ConducteurDeleteArgs<ExtArgs>>): Prisma__ConducteurClient<$Result.GetResult<Prisma.$ConducteurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Conducteur.
     * @param {ConducteurUpdateArgs} args - Arguments to update one Conducteur.
     * @example
     * // Update one Conducteur
     * const conducteur = await prisma.conducteur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConducteurUpdateArgs>(args: SelectSubset<T, ConducteurUpdateArgs<ExtArgs>>): Prisma__ConducteurClient<$Result.GetResult<Prisma.$ConducteurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conducteurs.
     * @param {ConducteurDeleteManyArgs} args - Arguments to filter Conducteurs to delete.
     * @example
     * // Delete a few Conducteurs
     * const { count } = await prisma.conducteur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConducteurDeleteManyArgs>(args?: SelectSubset<T, ConducteurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conducteurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConducteurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conducteurs
     * const conducteur = await prisma.conducteur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConducteurUpdateManyArgs>(args: SelectSubset<T, ConducteurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conducteurs and returns the data updated in the database.
     * @param {ConducteurUpdateManyAndReturnArgs} args - Arguments to update many Conducteurs.
     * @example
     * // Update many Conducteurs
     * const conducteur = await prisma.conducteur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conducteurs and only return the `id`
     * const conducteurWithIdOnly = await prisma.conducteur.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConducteurUpdateManyAndReturnArgs>(args: SelectSubset<T, ConducteurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConducteurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Conducteur.
     * @param {ConducteurUpsertArgs} args - Arguments to update or create a Conducteur.
     * @example
     * // Update or create a Conducteur
     * const conducteur = await prisma.conducteur.upsert({
     *   create: {
     *     // ... data to create a Conducteur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Conducteur we want to update
     *   }
     * })
     */
    upsert<T extends ConducteurUpsertArgs>(args: SelectSubset<T, ConducteurUpsertArgs<ExtArgs>>): Prisma__ConducteurClient<$Result.GetResult<Prisma.$ConducteurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conducteurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConducteurCountArgs} args - Arguments to filter Conducteurs to count.
     * @example
     * // Count the number of Conducteurs
     * const count = await prisma.conducteur.count({
     *   where: {
     *     // ... the filter for the Conducteurs we want to count
     *   }
     * })
    **/
    count<T extends ConducteurCountArgs>(
      args?: Subset<T, ConducteurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConducteurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Conducteur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConducteurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConducteurAggregateArgs>(args: Subset<T, ConducteurAggregateArgs>): Prisma.PrismaPromise<GetConducteurAggregateType<T>>

    /**
     * Group by Conducteur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConducteurGroupByArgs} args - Group by arguments.
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
      T extends ConducteurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConducteurGroupByArgs['orderBy'] }
        : { orderBy?: ConducteurGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConducteurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConducteurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Conducteur model
   */
  readonly fields: ConducteurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Conducteur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConducteurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    conducteurCovoiturages<T extends Conducteur$conducteurCovoituragesArgs<ExtArgs> = {}>(args?: Subset<T, Conducteur$conducteurCovoituragesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CovoituragePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Conducteur model
   */
  interface ConducteurFieldRefs {
    readonly id: FieldRef<"Conducteur", 'Int'>
    readonly cognitoId: FieldRef<"Conducteur", 'String'>
    readonly name: FieldRef<"Conducteur", 'String'>
    readonly email: FieldRef<"Conducteur", 'String'>
    readonly phoneNumber: FieldRef<"Conducteur", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Conducteur findUnique
   */
  export type ConducteurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conducteur
     */
    select?: ConducteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conducteur
     */
    omit?: ConducteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConducteurInclude<ExtArgs> | null
    /**
     * Filter, which Conducteur to fetch.
     */
    where: ConducteurWhereUniqueInput
  }

  /**
   * Conducteur findUniqueOrThrow
   */
  export type ConducteurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conducteur
     */
    select?: ConducteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conducteur
     */
    omit?: ConducteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConducteurInclude<ExtArgs> | null
    /**
     * Filter, which Conducteur to fetch.
     */
    where: ConducteurWhereUniqueInput
  }

  /**
   * Conducteur findFirst
   */
  export type ConducteurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conducteur
     */
    select?: ConducteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conducteur
     */
    omit?: ConducteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConducteurInclude<ExtArgs> | null
    /**
     * Filter, which Conducteur to fetch.
     */
    where?: ConducteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conducteurs to fetch.
     */
    orderBy?: ConducteurOrderByWithRelationInput | ConducteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conducteurs.
     */
    cursor?: ConducteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conducteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conducteurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conducteurs.
     */
    distinct?: ConducteurScalarFieldEnum | ConducteurScalarFieldEnum[]
  }

  /**
   * Conducteur findFirstOrThrow
   */
  export type ConducteurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conducteur
     */
    select?: ConducteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conducteur
     */
    omit?: ConducteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConducteurInclude<ExtArgs> | null
    /**
     * Filter, which Conducteur to fetch.
     */
    where?: ConducteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conducteurs to fetch.
     */
    orderBy?: ConducteurOrderByWithRelationInput | ConducteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conducteurs.
     */
    cursor?: ConducteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conducteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conducteurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conducteurs.
     */
    distinct?: ConducteurScalarFieldEnum | ConducteurScalarFieldEnum[]
  }

  /**
   * Conducteur findMany
   */
  export type ConducteurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conducteur
     */
    select?: ConducteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conducteur
     */
    omit?: ConducteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConducteurInclude<ExtArgs> | null
    /**
     * Filter, which Conducteurs to fetch.
     */
    where?: ConducteurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conducteurs to fetch.
     */
    orderBy?: ConducteurOrderByWithRelationInput | ConducteurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conducteurs.
     */
    cursor?: ConducteurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conducteurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conducteurs.
     */
    skip?: number
    distinct?: ConducteurScalarFieldEnum | ConducteurScalarFieldEnum[]
  }

  /**
   * Conducteur create
   */
  export type ConducteurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conducteur
     */
    select?: ConducteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conducteur
     */
    omit?: ConducteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConducteurInclude<ExtArgs> | null
    /**
     * The data needed to create a Conducteur.
     */
    data: XOR<ConducteurCreateInput, ConducteurUncheckedCreateInput>
  }

  /**
   * Conducteur createMany
   */
  export type ConducteurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conducteurs.
     */
    data: ConducteurCreateManyInput | ConducteurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conducteur createManyAndReturn
   */
  export type ConducteurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conducteur
     */
    select?: ConducteurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conducteur
     */
    omit?: ConducteurOmit<ExtArgs> | null
    /**
     * The data used to create many Conducteurs.
     */
    data: ConducteurCreateManyInput | ConducteurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Conducteur update
   */
  export type ConducteurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conducteur
     */
    select?: ConducteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conducteur
     */
    omit?: ConducteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConducteurInclude<ExtArgs> | null
    /**
     * The data needed to update a Conducteur.
     */
    data: XOR<ConducteurUpdateInput, ConducteurUncheckedUpdateInput>
    /**
     * Choose, which Conducteur to update.
     */
    where: ConducteurWhereUniqueInput
  }

  /**
   * Conducteur updateMany
   */
  export type ConducteurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conducteurs.
     */
    data: XOR<ConducteurUpdateManyMutationInput, ConducteurUncheckedUpdateManyInput>
    /**
     * Filter which Conducteurs to update
     */
    where?: ConducteurWhereInput
    /**
     * Limit how many Conducteurs to update.
     */
    limit?: number
  }

  /**
   * Conducteur updateManyAndReturn
   */
  export type ConducteurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conducteur
     */
    select?: ConducteurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Conducteur
     */
    omit?: ConducteurOmit<ExtArgs> | null
    /**
     * The data used to update Conducteurs.
     */
    data: XOR<ConducteurUpdateManyMutationInput, ConducteurUncheckedUpdateManyInput>
    /**
     * Filter which Conducteurs to update
     */
    where?: ConducteurWhereInput
    /**
     * Limit how many Conducteurs to update.
     */
    limit?: number
  }

  /**
   * Conducteur upsert
   */
  export type ConducteurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conducteur
     */
    select?: ConducteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conducteur
     */
    omit?: ConducteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConducteurInclude<ExtArgs> | null
    /**
     * The filter to search for the Conducteur to update in case it exists.
     */
    where: ConducteurWhereUniqueInput
    /**
     * In case the Conducteur found by the `where` argument doesn't exist, create a new Conducteur with this data.
     */
    create: XOR<ConducteurCreateInput, ConducteurUncheckedCreateInput>
    /**
     * In case the Conducteur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConducteurUpdateInput, ConducteurUncheckedUpdateInput>
  }

  /**
   * Conducteur delete
   */
  export type ConducteurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conducteur
     */
    select?: ConducteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conducteur
     */
    omit?: ConducteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConducteurInclude<ExtArgs> | null
    /**
     * Filter which Conducteur to delete.
     */
    where: ConducteurWhereUniqueInput
  }

  /**
   * Conducteur deleteMany
   */
  export type ConducteurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conducteurs to delete
     */
    where?: ConducteurWhereInput
    /**
     * Limit how many Conducteurs to delete.
     */
    limit?: number
  }

  /**
   * Conducteur.conducteurCovoiturages
   */
  export type Conducteur$conducteurCovoituragesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covoiturage
     */
    select?: CovoiturageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Covoiturage
     */
    omit?: CovoiturageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovoiturageInclude<ExtArgs> | null
    where?: CovoiturageWhereInput
    orderBy?: CovoiturageOrderByWithRelationInput | CovoiturageOrderByWithRelationInput[]
    cursor?: CovoiturageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CovoiturageScalarFieldEnum | CovoiturageScalarFieldEnum[]
  }

  /**
   * Conducteur without action
   */
  export type ConducteurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Conducteur
     */
    select?: ConducteurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Conducteur
     */
    omit?: ConducteurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConducteurInclude<ExtArgs> | null
  }


  /**
   * Model Passager
   */

  export type AggregatePassager = {
    _count: PassagerCountAggregateOutputType | null
    _avg: PassagerAvgAggregateOutputType | null
    _sum: PassagerSumAggregateOutputType | null
    _min: PassagerMinAggregateOutputType | null
    _max: PassagerMaxAggregateOutputType | null
  }

  export type PassagerAvgAggregateOutputType = {
    id: number | null
  }

  export type PassagerSumAggregateOutputType = {
    id: number | null
  }

  export type PassagerMinAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
  }

  export type PassagerMaxAggregateOutputType = {
    id: number | null
    cognitoId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
  }

  export type PassagerCountAggregateOutputType = {
    id: number
    cognitoId: number
    name: number
    email: number
    phoneNumber: number
    _all: number
  }


  export type PassagerAvgAggregateInputType = {
    id?: true
  }

  export type PassagerSumAggregateInputType = {
    id?: true
  }

  export type PassagerMinAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
  }

  export type PassagerMaxAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
  }

  export type PassagerCountAggregateInputType = {
    id?: true
    cognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
    _all?: true
  }

  export type PassagerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passager to aggregate.
     */
    where?: PassagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passagers to fetch.
     */
    orderBy?: PassagerOrderByWithRelationInput | PassagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PassagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Passagers
    **/
    _count?: true | PassagerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PassagerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PassagerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PassagerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PassagerMaxAggregateInputType
  }

  export type GetPassagerAggregateType<T extends PassagerAggregateArgs> = {
        [P in keyof T & keyof AggregatePassager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassager[P]>
      : GetScalarType<T[P], AggregatePassager[P]>
  }




  export type PassagerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PassagerWhereInput
    orderBy?: PassagerOrderByWithAggregationInput | PassagerOrderByWithAggregationInput[]
    by: PassagerScalarFieldEnum[] | PassagerScalarFieldEnum
    having?: PassagerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PassagerCountAggregateInputType | true
    _avg?: PassagerAvgAggregateInputType
    _sum?: PassagerSumAggregateInputType
    _min?: PassagerMinAggregateInputType
    _max?: PassagerMaxAggregateInputType
  }

  export type PassagerGroupByOutputType = {
    id: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    _count: PassagerCountAggregateOutputType | null
    _avg: PassagerAvgAggregateOutputType | null
    _sum: PassagerSumAggregateOutputType | null
    _min: PassagerMinAggregateOutputType | null
    _max: PassagerMaxAggregateOutputType | null
  }

  type GetPassagerGroupByPayload<T extends PassagerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PassagerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PassagerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PassagerGroupByOutputType[P]>
            : GetScalarType<T[P], PassagerGroupByOutputType[P]>
        }
      >
    >


  export type PassagerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    covoiturages?: boolean | Passager$covoituragesArgs<ExtArgs>
    favorites?: boolean | Passager$favoritesArgs<ExtArgs>
    applications?: boolean | Passager$applicationsArgs<ExtArgs>
    leases?: boolean | Passager$leasesArgs<ExtArgs>
    _count?: boolean | PassagerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passager"]>

  export type PassagerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["passager"]>

  export type PassagerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }, ExtArgs["result"]["passager"]>

  export type PassagerSelectScalar = {
    id?: boolean
    cognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
  }

  export type PassagerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cognitoId" | "name" | "email" | "phoneNumber", ExtArgs["result"]["passager"]>
  export type PassagerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    covoiturages?: boolean | Passager$covoituragesArgs<ExtArgs>
    favorites?: boolean | Passager$favoritesArgs<ExtArgs>
    applications?: boolean | Passager$applicationsArgs<ExtArgs>
    leases?: boolean | Passager$leasesArgs<ExtArgs>
    _count?: boolean | PassagerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PassagerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PassagerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PassagerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Passager"
    objects: {
      covoiturages: Prisma.$CovoituragePayload<ExtArgs>[]
      favorites: Prisma.$CovoituragePayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      leases: Prisma.$LeasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cognitoId: string
      name: string
      email: string
      phoneNumber: string
    }, ExtArgs["result"]["passager"]>
    composites: {}
  }

  type PassagerGetPayload<S extends boolean | null | undefined | PassagerDefaultArgs> = $Result.GetResult<Prisma.$PassagerPayload, S>

  type PassagerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PassagerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PassagerCountAggregateInputType | true
    }

  export interface PassagerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Passager'], meta: { name: 'Passager' } }
    /**
     * Find zero or one Passager that matches the filter.
     * @param {PassagerFindUniqueArgs} args - Arguments to find a Passager
     * @example
     * // Get one Passager
     * const passager = await prisma.passager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PassagerFindUniqueArgs>(args: SelectSubset<T, PassagerFindUniqueArgs<ExtArgs>>): Prisma__PassagerClient<$Result.GetResult<Prisma.$PassagerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Passager that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PassagerFindUniqueOrThrowArgs} args - Arguments to find a Passager
     * @example
     * // Get one Passager
     * const passager = await prisma.passager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PassagerFindUniqueOrThrowArgs>(args: SelectSubset<T, PassagerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PassagerClient<$Result.GetResult<Prisma.$PassagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassagerFindFirstArgs} args - Arguments to find a Passager
     * @example
     * // Get one Passager
     * const passager = await prisma.passager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PassagerFindFirstArgs>(args?: SelectSubset<T, PassagerFindFirstArgs<ExtArgs>>): Prisma__PassagerClient<$Result.GetResult<Prisma.$PassagerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Passager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassagerFindFirstOrThrowArgs} args - Arguments to find a Passager
     * @example
     * // Get one Passager
     * const passager = await prisma.passager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PassagerFindFirstOrThrowArgs>(args?: SelectSubset<T, PassagerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PassagerClient<$Result.GetResult<Prisma.$PassagerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Passagers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassagerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Passagers
     * const passagers = await prisma.passager.findMany()
     * 
     * // Get first 10 Passagers
     * const passagers = await prisma.passager.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passagerWithIdOnly = await prisma.passager.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PassagerFindManyArgs>(args?: SelectSubset<T, PassagerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassagerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Passager.
     * @param {PassagerCreateArgs} args - Arguments to create a Passager.
     * @example
     * // Create one Passager
     * const Passager = await prisma.passager.create({
     *   data: {
     *     // ... data to create a Passager
     *   }
     * })
     * 
     */
    create<T extends PassagerCreateArgs>(args: SelectSubset<T, PassagerCreateArgs<ExtArgs>>): Prisma__PassagerClient<$Result.GetResult<Prisma.$PassagerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Passagers.
     * @param {PassagerCreateManyArgs} args - Arguments to create many Passagers.
     * @example
     * // Create many Passagers
     * const passager = await prisma.passager.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PassagerCreateManyArgs>(args?: SelectSubset<T, PassagerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Passagers and returns the data saved in the database.
     * @param {PassagerCreateManyAndReturnArgs} args - Arguments to create many Passagers.
     * @example
     * // Create many Passagers
     * const passager = await prisma.passager.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Passagers and only return the `id`
     * const passagerWithIdOnly = await prisma.passager.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PassagerCreateManyAndReturnArgs>(args?: SelectSubset<T, PassagerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassagerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Passager.
     * @param {PassagerDeleteArgs} args - Arguments to delete one Passager.
     * @example
     * // Delete one Passager
     * const Passager = await prisma.passager.delete({
     *   where: {
     *     // ... filter to delete one Passager
     *   }
     * })
     * 
     */
    delete<T extends PassagerDeleteArgs>(args: SelectSubset<T, PassagerDeleteArgs<ExtArgs>>): Prisma__PassagerClient<$Result.GetResult<Prisma.$PassagerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Passager.
     * @param {PassagerUpdateArgs} args - Arguments to update one Passager.
     * @example
     * // Update one Passager
     * const passager = await prisma.passager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PassagerUpdateArgs>(args: SelectSubset<T, PassagerUpdateArgs<ExtArgs>>): Prisma__PassagerClient<$Result.GetResult<Prisma.$PassagerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Passagers.
     * @param {PassagerDeleteManyArgs} args - Arguments to filter Passagers to delete.
     * @example
     * // Delete a few Passagers
     * const { count } = await prisma.passager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PassagerDeleteManyArgs>(args?: SelectSubset<T, PassagerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passagers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassagerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Passagers
     * const passager = await prisma.passager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PassagerUpdateManyArgs>(args: SelectSubset<T, PassagerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Passagers and returns the data updated in the database.
     * @param {PassagerUpdateManyAndReturnArgs} args - Arguments to update many Passagers.
     * @example
     * // Update many Passagers
     * const passager = await prisma.passager.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Passagers and only return the `id`
     * const passagerWithIdOnly = await prisma.passager.updateManyAndReturn({
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
    updateManyAndReturn<T extends PassagerUpdateManyAndReturnArgs>(args: SelectSubset<T, PassagerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassagerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Passager.
     * @param {PassagerUpsertArgs} args - Arguments to update or create a Passager.
     * @example
     * // Update or create a Passager
     * const passager = await prisma.passager.upsert({
     *   create: {
     *     // ... data to create a Passager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Passager we want to update
     *   }
     * })
     */
    upsert<T extends PassagerUpsertArgs>(args: SelectSubset<T, PassagerUpsertArgs<ExtArgs>>): Prisma__PassagerClient<$Result.GetResult<Prisma.$PassagerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Passagers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassagerCountArgs} args - Arguments to filter Passagers to count.
     * @example
     * // Count the number of Passagers
     * const count = await prisma.passager.count({
     *   where: {
     *     // ... the filter for the Passagers we want to count
     *   }
     * })
    **/
    count<T extends PassagerCountArgs>(
      args?: Subset<T, PassagerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PassagerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Passager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassagerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PassagerAggregateArgs>(args: Subset<T, PassagerAggregateArgs>): Prisma.PrismaPromise<GetPassagerAggregateType<T>>

    /**
     * Group by Passager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassagerGroupByArgs} args - Group by arguments.
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
      T extends PassagerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PassagerGroupByArgs['orderBy'] }
        : { orderBy?: PassagerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PassagerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassagerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Passager model
   */
  readonly fields: PassagerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Passager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PassagerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    covoiturages<T extends Passager$covoituragesArgs<ExtArgs> = {}>(args?: Subset<T, Passager$covoituragesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CovoituragePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends Passager$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, Passager$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CovoituragePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends Passager$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Passager$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leases<T extends Passager$leasesArgs<ExtArgs> = {}>(args?: Subset<T, Passager$leasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Passager model
   */
  interface PassagerFieldRefs {
    readonly id: FieldRef<"Passager", 'Int'>
    readonly cognitoId: FieldRef<"Passager", 'String'>
    readonly name: FieldRef<"Passager", 'String'>
    readonly email: FieldRef<"Passager", 'String'>
    readonly phoneNumber: FieldRef<"Passager", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Passager findUnique
   */
  export type PassagerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passager
     */
    select?: PassagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passager
     */
    omit?: PassagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassagerInclude<ExtArgs> | null
    /**
     * Filter, which Passager to fetch.
     */
    where: PassagerWhereUniqueInput
  }

  /**
   * Passager findUniqueOrThrow
   */
  export type PassagerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passager
     */
    select?: PassagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passager
     */
    omit?: PassagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassagerInclude<ExtArgs> | null
    /**
     * Filter, which Passager to fetch.
     */
    where: PassagerWhereUniqueInput
  }

  /**
   * Passager findFirst
   */
  export type PassagerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passager
     */
    select?: PassagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passager
     */
    omit?: PassagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassagerInclude<ExtArgs> | null
    /**
     * Filter, which Passager to fetch.
     */
    where?: PassagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passagers to fetch.
     */
    orderBy?: PassagerOrderByWithRelationInput | PassagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passagers.
     */
    cursor?: PassagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passagers.
     */
    distinct?: PassagerScalarFieldEnum | PassagerScalarFieldEnum[]
  }

  /**
   * Passager findFirstOrThrow
   */
  export type PassagerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passager
     */
    select?: PassagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passager
     */
    omit?: PassagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassagerInclude<ExtArgs> | null
    /**
     * Filter, which Passager to fetch.
     */
    where?: PassagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passagers to fetch.
     */
    orderBy?: PassagerOrderByWithRelationInput | PassagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Passagers.
     */
    cursor?: PassagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passagers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Passagers.
     */
    distinct?: PassagerScalarFieldEnum | PassagerScalarFieldEnum[]
  }

  /**
   * Passager findMany
   */
  export type PassagerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passager
     */
    select?: PassagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passager
     */
    omit?: PassagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassagerInclude<ExtArgs> | null
    /**
     * Filter, which Passagers to fetch.
     */
    where?: PassagerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Passagers to fetch.
     */
    orderBy?: PassagerOrderByWithRelationInput | PassagerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Passagers.
     */
    cursor?: PassagerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Passagers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Passagers.
     */
    skip?: number
    distinct?: PassagerScalarFieldEnum | PassagerScalarFieldEnum[]
  }

  /**
   * Passager create
   */
  export type PassagerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passager
     */
    select?: PassagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passager
     */
    omit?: PassagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassagerInclude<ExtArgs> | null
    /**
     * The data needed to create a Passager.
     */
    data: XOR<PassagerCreateInput, PassagerUncheckedCreateInput>
  }

  /**
   * Passager createMany
   */
  export type PassagerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Passagers.
     */
    data: PassagerCreateManyInput | PassagerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Passager createManyAndReturn
   */
  export type PassagerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passager
     */
    select?: PassagerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Passager
     */
    omit?: PassagerOmit<ExtArgs> | null
    /**
     * The data used to create many Passagers.
     */
    data: PassagerCreateManyInput | PassagerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Passager update
   */
  export type PassagerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passager
     */
    select?: PassagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passager
     */
    omit?: PassagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassagerInclude<ExtArgs> | null
    /**
     * The data needed to update a Passager.
     */
    data: XOR<PassagerUpdateInput, PassagerUncheckedUpdateInput>
    /**
     * Choose, which Passager to update.
     */
    where: PassagerWhereUniqueInput
  }

  /**
   * Passager updateMany
   */
  export type PassagerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Passagers.
     */
    data: XOR<PassagerUpdateManyMutationInput, PassagerUncheckedUpdateManyInput>
    /**
     * Filter which Passagers to update
     */
    where?: PassagerWhereInput
    /**
     * Limit how many Passagers to update.
     */
    limit?: number
  }

  /**
   * Passager updateManyAndReturn
   */
  export type PassagerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passager
     */
    select?: PassagerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Passager
     */
    omit?: PassagerOmit<ExtArgs> | null
    /**
     * The data used to update Passagers.
     */
    data: XOR<PassagerUpdateManyMutationInput, PassagerUncheckedUpdateManyInput>
    /**
     * Filter which Passagers to update
     */
    where?: PassagerWhereInput
    /**
     * Limit how many Passagers to update.
     */
    limit?: number
  }

  /**
   * Passager upsert
   */
  export type PassagerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passager
     */
    select?: PassagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passager
     */
    omit?: PassagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassagerInclude<ExtArgs> | null
    /**
     * The filter to search for the Passager to update in case it exists.
     */
    where: PassagerWhereUniqueInput
    /**
     * In case the Passager found by the `where` argument doesn't exist, create a new Passager with this data.
     */
    create: XOR<PassagerCreateInput, PassagerUncheckedCreateInput>
    /**
     * In case the Passager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PassagerUpdateInput, PassagerUncheckedUpdateInput>
  }

  /**
   * Passager delete
   */
  export type PassagerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passager
     */
    select?: PassagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passager
     */
    omit?: PassagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassagerInclude<ExtArgs> | null
    /**
     * Filter which Passager to delete.
     */
    where: PassagerWhereUniqueInput
  }

  /**
   * Passager deleteMany
   */
  export type PassagerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Passagers to delete
     */
    where?: PassagerWhereInput
    /**
     * Limit how many Passagers to delete.
     */
    limit?: number
  }

  /**
   * Passager.covoiturages
   */
  export type Passager$covoituragesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covoiturage
     */
    select?: CovoiturageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Covoiturage
     */
    omit?: CovoiturageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovoiturageInclude<ExtArgs> | null
    where?: CovoiturageWhereInput
    orderBy?: CovoiturageOrderByWithRelationInput | CovoiturageOrderByWithRelationInput[]
    cursor?: CovoiturageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CovoiturageScalarFieldEnum | CovoiturageScalarFieldEnum[]
  }

  /**
   * Passager.favorites
   */
  export type Passager$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covoiturage
     */
    select?: CovoiturageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Covoiturage
     */
    omit?: CovoiturageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovoiturageInclude<ExtArgs> | null
    where?: CovoiturageWhereInput
    orderBy?: CovoiturageOrderByWithRelationInput | CovoiturageOrderByWithRelationInput[]
    cursor?: CovoiturageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CovoiturageScalarFieldEnum | CovoiturageScalarFieldEnum[]
  }

  /**
   * Passager.applications
   */
  export type Passager$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Passager.leases
   */
  export type Passager$leasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    cursor?: LeaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Passager without action
   */
  export type PassagerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Passager
     */
    select?: PassagerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Passager
     */
    omit?: PassagerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassagerInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationAvgAggregateOutputType = {
    id: number | null
  }

  export type LocationSumAggregateOutputType = {
    id: number | null
  }

  export type LocationMinAggregateOutputType = {
    id: number | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
  }

  export type LocationMaxAggregateOutputType = {
    id: number | null
    address: string | null
    city: string | null
    state: string | null
    country: string | null
    postalCode: string | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    address: number
    city: number
    state: number
    country: number
    postalCode: number
    _all: number
  }


  export type LocationAvgAggregateInputType = {
    id?: true
  }

  export type LocationSumAggregateInputType = {
    id?: true
  }

  export type LocationMinAggregateInputType = {
    id?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    address?: true
    city?: true
    state?: true
    country?: true
    postalCode?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _avg?: LocationAvgAggregateInputType
    _sum?: LocationSumAggregateInputType
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: number
    address: string
    city: string
    state: string
    country: string
    postalCode: string
    _count: LocationCountAggregateOutputType | null
    _avg: LocationAvgAggregateOutputType | null
    _sum: LocationSumAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
    covoiturages?: boolean | Location$covoituragesArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>


  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postalCode?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "city" | "state" | "country" | "postalCode", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    covoiturages?: boolean | Location$covoituragesArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      covoiturages: Prisma.$CovoituragePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      address: string
      city: string
      state: string
      country: string
      postalCode: string
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    covoiturages<T extends Location$covoituragesArgs<ExtArgs> = {}>(args?: Subset<T, Location$covoituragesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CovoituragePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'Int'>
    readonly address: FieldRef<"Location", 'String'>
    readonly city: FieldRef<"Location", 'String'>
    readonly state: FieldRef<"Location", 'String'>
    readonly country: FieldRef<"Location", 'String'>
    readonly postalCode: FieldRef<"Location", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.covoiturages
   */
  export type Location$covoituragesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Covoiturage
     */
    select?: CovoiturageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Covoiturage
     */
    omit?: CovoiturageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CovoiturageInclude<ExtArgs> | null
    where?: CovoiturageWhereInput
    orderBy?: CovoiturageOrderByWithRelationInput | CovoiturageOrderByWithRelationInput[]
    cursor?: CovoiturageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CovoiturageScalarFieldEnum | CovoiturageScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationAvgAggregateOutputType = {
    id: number | null
    covoiturageId: number | null
    leaseId: number | null
  }

  export type ApplicationSumAggregateOutputType = {
    id: number | null
    covoiturageId: number | null
    leaseId: number | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: number | null
    applicationDate: Date | null
    status: $Enums.ApplicationStatus | null
    covoiturageId: number | null
    passagerCognitoId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    message: string | null
    leaseId: number | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: number | null
    applicationDate: Date | null
    status: $Enums.ApplicationStatus | null
    covoiturageId: number | null
    passagerCognitoId: string | null
    name: string | null
    email: string | null
    phoneNumber: string | null
    message: string | null
    leaseId: number | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    applicationDate: number
    status: number
    covoiturageId: number
    passagerCognitoId: number
    name: number
    email: number
    phoneNumber: number
    message: number
    leaseId: number
    _all: number
  }


  export type ApplicationAvgAggregateInputType = {
    id?: true
    covoiturageId?: true
    leaseId?: true
  }

  export type ApplicationSumAggregateInputType = {
    id?: true
    covoiturageId?: true
    leaseId?: true
  }

  export type ApplicationMinAggregateInputType = {
    id?: true
    applicationDate?: true
    status?: true
    covoiturageId?: true
    passagerCognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
    message?: true
    leaseId?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    applicationDate?: true
    status?: true
    covoiturageId?: true
    passagerCognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
    message?: true
    leaseId?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    applicationDate?: true
    status?: true
    covoiturageId?: true
    passagerCognitoId?: true
    name?: true
    email?: true
    phoneNumber?: true
    message?: true
    leaseId?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _avg?: ApplicationAvgAggregateInputType
    _sum?: ApplicationSumAggregateInputType
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: number
    applicationDate: Date
    status: $Enums.ApplicationStatus
    covoiturageId: number
    passagerCognitoId: string
    name: string
    email: string
    phoneNumber: string
    message: string | null
    leaseId: number | null
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationDate?: boolean
    status?: boolean
    covoiturageId?: boolean
    passagerCognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    message?: boolean
    leaseId?: boolean
    covoiturage?: boolean | CovoiturageDefaultArgs<ExtArgs>
    passager?: boolean | PassagerDefaultArgs<ExtArgs>
    lease?: boolean | Application$leaseArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationDate?: boolean
    status?: boolean
    covoiturageId?: boolean
    passagerCognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    message?: boolean
    leaseId?: boolean
    covoiturage?: boolean | CovoiturageDefaultArgs<ExtArgs>
    passager?: boolean | PassagerDefaultArgs<ExtArgs>
    lease?: boolean | Application$leaseArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationDate?: boolean
    status?: boolean
    covoiturageId?: boolean
    passagerCognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    message?: boolean
    leaseId?: boolean
    covoiturage?: boolean | CovoiturageDefaultArgs<ExtArgs>
    passager?: boolean | PassagerDefaultArgs<ExtArgs>
    lease?: boolean | Application$leaseArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    applicationDate?: boolean
    status?: boolean
    covoiturageId?: boolean
    passagerCognitoId?: boolean
    name?: boolean
    email?: boolean
    phoneNumber?: boolean
    message?: boolean
    leaseId?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationDate" | "status" | "covoiturageId" | "passagerCognitoId" | "name" | "email" | "phoneNumber" | "message" | "leaseId", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    covoiturage?: boolean | CovoiturageDefaultArgs<ExtArgs>
    passager?: boolean | PassagerDefaultArgs<ExtArgs>
    lease?: boolean | Application$leaseArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    covoiturage?: boolean | CovoiturageDefaultArgs<ExtArgs>
    passager?: boolean | PassagerDefaultArgs<ExtArgs>
    lease?: boolean | Application$leaseArgs<ExtArgs>
  }
  export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    covoiturage?: boolean | CovoiturageDefaultArgs<ExtArgs>
    passager?: boolean | PassagerDefaultArgs<ExtArgs>
    lease?: boolean | Application$leaseArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      covoiturage: Prisma.$CovoituragePayload<ExtArgs>
      passager: Prisma.$PassagerPayload<ExtArgs>
      lease: Prisma.$LeasePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      applicationDate: Date
      status: $Enums.ApplicationStatus
      covoiturageId: number
      passagerCognitoId: string
      name: string
      email: string
      phoneNumber: string
      message: string | null
      leaseId: number | null
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
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
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
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
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    covoiturage<T extends CovoiturageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CovoiturageDefaultArgs<ExtArgs>>): Prisma__CovoiturageClient<$Result.GetResult<Prisma.$CovoituragePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    passager<T extends PassagerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PassagerDefaultArgs<ExtArgs>>): Prisma__PassagerClient<$Result.GetResult<Prisma.$PassagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lease<T extends Application$leaseArgs<ExtArgs> = {}>(args?: Subset<T, Application$leaseArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'Int'>
    readonly applicationDate: FieldRef<"Application", 'DateTime'>
    readonly status: FieldRef<"Application", 'ApplicationStatus'>
    readonly covoiturageId: FieldRef<"Application", 'Int'>
    readonly passagerCognitoId: FieldRef<"Application", 'String'>
    readonly name: FieldRef<"Application", 'String'>
    readonly email: FieldRef<"Application", 'String'>
    readonly phoneNumber: FieldRef<"Application", 'String'>
    readonly message: FieldRef<"Application", 'String'>
    readonly leaseId: FieldRef<"Application", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application.lease
   */
  export type Application$leaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    where?: LeaseWhereInput
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Model Lease
   */

  export type AggregateLease = {
    _count: LeaseCountAggregateOutputType | null
    _avg: LeaseAvgAggregateOutputType | null
    _sum: LeaseSumAggregateOutputType | null
    _min: LeaseMinAggregateOutputType | null
    _max: LeaseMaxAggregateOutputType | null
  }

  export type LeaseAvgAggregateOutputType = {
    id: number | null
    covoiturageId: number | null
  }

  export type LeaseSumAggregateOutputType = {
    id: number | null
    covoiturageId: number | null
  }

  export type LeaseMinAggregateOutputType = {
    id: number | null
    startDate: Date | null
    endDate: Date | null
    covoiturageId: number | null
    passagerCognitoId: string | null
  }

  export type LeaseMaxAggregateOutputType = {
    id: number | null
    startDate: Date | null
    endDate: Date | null
    covoiturageId: number | null
    passagerCognitoId: string | null
  }

  export type LeaseCountAggregateOutputType = {
    id: number
    startDate: number
    endDate: number
    covoiturageId: number
    passagerCognitoId: number
    _all: number
  }


  export type LeaseAvgAggregateInputType = {
    id?: true
    covoiturageId?: true
  }

  export type LeaseSumAggregateInputType = {
    id?: true
    covoiturageId?: true
  }

  export type LeaseMinAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    covoiturageId?: true
    passagerCognitoId?: true
  }

  export type LeaseMaxAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    covoiturageId?: true
    passagerCognitoId?: true
  }

  export type LeaseCountAggregateInputType = {
    id?: true
    startDate?: true
    endDate?: true
    covoiturageId?: true
    passagerCognitoId?: true
    _all?: true
  }

  export type LeaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lease to aggregate.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leases
    **/
    _count?: true | LeaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaseMaxAggregateInputType
  }

  export type GetLeaseAggregateType<T extends LeaseAggregateArgs> = {
        [P in keyof T & keyof AggregateLease]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLease[P]>
      : GetScalarType<T[P], AggregateLease[P]>
  }




  export type LeaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaseWhereInput
    orderBy?: LeaseOrderByWithAggregationInput | LeaseOrderByWithAggregationInput[]
    by: LeaseScalarFieldEnum[] | LeaseScalarFieldEnum
    having?: LeaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaseCountAggregateInputType | true
    _avg?: LeaseAvgAggregateInputType
    _sum?: LeaseSumAggregateInputType
    _min?: LeaseMinAggregateInputType
    _max?: LeaseMaxAggregateInputType
  }

  export type LeaseGroupByOutputType = {
    id: number
    startDate: Date
    endDate: Date
    covoiturageId: number
    passagerCognitoId: string
    _count: LeaseCountAggregateOutputType | null
    _avg: LeaseAvgAggregateOutputType | null
    _sum: LeaseSumAggregateOutputType | null
    _min: LeaseMinAggregateOutputType | null
    _max: LeaseMaxAggregateOutputType | null
  }

  type GetLeaseGroupByPayload<T extends LeaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaseGroupByOutputType[P]>
            : GetScalarType<T[P], LeaseGroupByOutputType[P]>
        }
      >
    >


  export type LeaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    covoiturageId?: boolean
    passagerCognitoId?: boolean
    covoiturage?: boolean | CovoiturageDefaultArgs<ExtArgs>
    passager?: boolean | PassagerDefaultArgs<ExtArgs>
    application?: boolean | Lease$applicationArgs<ExtArgs>
    payments?: boolean | Lease$paymentsArgs<ExtArgs>
    _count?: boolean | LeaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lease"]>

  export type LeaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    covoiturageId?: boolean
    passagerCognitoId?: boolean
    covoiturage?: boolean | CovoiturageDefaultArgs<ExtArgs>
    passager?: boolean | PassagerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lease"]>

  export type LeaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    covoiturageId?: boolean
    passagerCognitoId?: boolean
    covoiturage?: boolean | CovoiturageDefaultArgs<ExtArgs>
    passager?: boolean | PassagerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lease"]>

  export type LeaseSelectScalar = {
    id?: boolean
    startDate?: boolean
    endDate?: boolean
    covoiturageId?: boolean
    passagerCognitoId?: boolean
  }

  export type LeaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "startDate" | "endDate" | "covoiturageId" | "passagerCognitoId", ExtArgs["result"]["lease"]>
  export type LeaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    covoiturage?: boolean | CovoiturageDefaultArgs<ExtArgs>
    passager?: boolean | PassagerDefaultArgs<ExtArgs>
    application?: boolean | Lease$applicationArgs<ExtArgs>
    payments?: boolean | Lease$paymentsArgs<ExtArgs>
    _count?: boolean | LeaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    covoiturage?: boolean | CovoiturageDefaultArgs<ExtArgs>
    passager?: boolean | PassagerDefaultArgs<ExtArgs>
  }
  export type LeaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    covoiturage?: boolean | CovoiturageDefaultArgs<ExtArgs>
    passager?: boolean | PassagerDefaultArgs<ExtArgs>
  }

  export type $LeasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lease"
    objects: {
      covoiturage: Prisma.$CovoituragePayload<ExtArgs>
      passager: Prisma.$PassagerPayload<ExtArgs>
      application: Prisma.$ApplicationPayload<ExtArgs> | null
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      startDate: Date
      endDate: Date
      covoiturageId: number
      passagerCognitoId: string
    }, ExtArgs["result"]["lease"]>
    composites: {}
  }

  type LeaseGetPayload<S extends boolean | null | undefined | LeaseDefaultArgs> = $Result.GetResult<Prisma.$LeasePayload, S>

  type LeaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaseCountAggregateInputType | true
    }

  export interface LeaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lease'], meta: { name: 'Lease' } }
    /**
     * Find zero or one Lease that matches the filter.
     * @param {LeaseFindUniqueArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaseFindUniqueArgs>(args: SelectSubset<T, LeaseFindUniqueArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lease that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaseFindUniqueOrThrowArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaseFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lease that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFindFirstArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaseFindFirstArgs>(args?: SelectSubset<T, LeaseFindFirstArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lease that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFindFirstOrThrowArgs} args - Arguments to find a Lease
     * @example
     * // Get one Lease
     * const lease = await prisma.lease.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaseFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leases
     * const leases = await prisma.lease.findMany()
     * 
     * // Get first 10 Leases
     * const leases = await prisma.lease.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaseWithIdOnly = await prisma.lease.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaseFindManyArgs>(args?: SelectSubset<T, LeaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lease.
     * @param {LeaseCreateArgs} args - Arguments to create a Lease.
     * @example
     * // Create one Lease
     * const Lease = await prisma.lease.create({
     *   data: {
     *     // ... data to create a Lease
     *   }
     * })
     * 
     */
    create<T extends LeaseCreateArgs>(args: SelectSubset<T, LeaseCreateArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leases.
     * @param {LeaseCreateManyArgs} args - Arguments to create many Leases.
     * @example
     * // Create many Leases
     * const lease = await prisma.lease.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaseCreateManyArgs>(args?: SelectSubset<T, LeaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leases and returns the data saved in the database.
     * @param {LeaseCreateManyAndReturnArgs} args - Arguments to create many Leases.
     * @example
     * // Create many Leases
     * const lease = await prisma.lease.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leases and only return the `id`
     * const leaseWithIdOnly = await prisma.lease.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaseCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lease.
     * @param {LeaseDeleteArgs} args - Arguments to delete one Lease.
     * @example
     * // Delete one Lease
     * const Lease = await prisma.lease.delete({
     *   where: {
     *     // ... filter to delete one Lease
     *   }
     * })
     * 
     */
    delete<T extends LeaseDeleteArgs>(args: SelectSubset<T, LeaseDeleteArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lease.
     * @param {LeaseUpdateArgs} args - Arguments to update one Lease.
     * @example
     * // Update one Lease
     * const lease = await prisma.lease.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaseUpdateArgs>(args: SelectSubset<T, LeaseUpdateArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leases.
     * @param {LeaseDeleteManyArgs} args - Arguments to filter Leases to delete.
     * @example
     * // Delete a few Leases
     * const { count } = await prisma.lease.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaseDeleteManyArgs>(args?: SelectSubset<T, LeaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leases
     * const lease = await prisma.lease.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaseUpdateManyArgs>(args: SelectSubset<T, LeaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leases and returns the data updated in the database.
     * @param {LeaseUpdateManyAndReturnArgs} args - Arguments to update many Leases.
     * @example
     * // Update many Leases
     * const lease = await prisma.lease.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leases and only return the `id`
     * const leaseWithIdOnly = await prisma.lease.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeaseUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lease.
     * @param {LeaseUpsertArgs} args - Arguments to update or create a Lease.
     * @example
     * // Update or create a Lease
     * const lease = await prisma.lease.upsert({
     *   create: {
     *     // ... data to create a Lease
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lease we want to update
     *   }
     * })
     */
    upsert<T extends LeaseUpsertArgs>(args: SelectSubset<T, LeaseUpsertArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseCountArgs} args - Arguments to filter Leases to count.
     * @example
     * // Count the number of Leases
     * const count = await prisma.lease.count({
     *   where: {
     *     // ... the filter for the Leases we want to count
     *   }
     * })
    **/
    count<T extends LeaseCountArgs>(
      args?: Subset<T, LeaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeaseAggregateArgs>(args: Subset<T, LeaseAggregateArgs>): Prisma.PrismaPromise<GetLeaseAggregateType<T>>

    /**
     * Group by Lease.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaseGroupByArgs} args - Group by arguments.
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
      T extends LeaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaseGroupByArgs['orderBy'] }
        : { orderBy?: LeaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lease model
   */
  readonly fields: LeaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lease.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    covoiturage<T extends CovoiturageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CovoiturageDefaultArgs<ExtArgs>>): Prisma__CovoiturageClient<$Result.GetResult<Prisma.$CovoituragePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    passager<T extends PassagerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PassagerDefaultArgs<ExtArgs>>): Prisma__PassagerClient<$Result.GetResult<Prisma.$PassagerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    application<T extends Lease$applicationArgs<ExtArgs> = {}>(args?: Subset<T, Lease$applicationArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payments<T extends Lease$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Lease$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lease model
   */
  interface LeaseFieldRefs {
    readonly id: FieldRef<"Lease", 'Int'>
    readonly startDate: FieldRef<"Lease", 'DateTime'>
    readonly endDate: FieldRef<"Lease", 'DateTime'>
    readonly covoiturageId: FieldRef<"Lease", 'Int'>
    readonly passagerCognitoId: FieldRef<"Lease", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Lease findUnique
   */
  export type LeaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease findUniqueOrThrow
   */
  export type LeaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease findFirst
   */
  export type LeaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leases.
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leases.
     */
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease findFirstOrThrow
   */
  export type LeaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Lease to fetch.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leases.
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leases.
     */
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease findMany
   */
  export type LeaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter, which Leases to fetch.
     */
    where?: LeaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leases to fetch.
     */
    orderBy?: LeaseOrderByWithRelationInput | LeaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leases.
     */
    cursor?: LeaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leases.
     */
    skip?: number
    distinct?: LeaseScalarFieldEnum | LeaseScalarFieldEnum[]
  }

  /**
   * Lease create
   */
  export type LeaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Lease.
     */
    data: XOR<LeaseCreateInput, LeaseUncheckedCreateInput>
  }

  /**
   * Lease createMany
   */
  export type LeaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leases.
     */
    data: LeaseCreateManyInput | LeaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lease createManyAndReturn
   */
  export type LeaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * The data used to create many Leases.
     */
    data: LeaseCreateManyInput | LeaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lease update
   */
  export type LeaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Lease.
     */
    data: XOR<LeaseUpdateInput, LeaseUncheckedUpdateInput>
    /**
     * Choose, which Lease to update.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease updateMany
   */
  export type LeaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leases.
     */
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyInput>
    /**
     * Filter which Leases to update
     */
    where?: LeaseWhereInput
    /**
     * Limit how many Leases to update.
     */
    limit?: number
  }

  /**
   * Lease updateManyAndReturn
   */
  export type LeaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * The data used to update Leases.
     */
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyInput>
    /**
     * Filter which Leases to update
     */
    where?: LeaseWhereInput
    /**
     * Limit how many Leases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lease upsert
   */
  export type LeaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Lease to update in case it exists.
     */
    where: LeaseWhereUniqueInput
    /**
     * In case the Lease found by the `where` argument doesn't exist, create a new Lease with this data.
     */
    create: XOR<LeaseCreateInput, LeaseUncheckedCreateInput>
    /**
     * In case the Lease was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaseUpdateInput, LeaseUncheckedUpdateInput>
  }

  /**
   * Lease delete
   */
  export type LeaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
    /**
     * Filter which Lease to delete.
     */
    where: LeaseWhereUniqueInput
  }

  /**
   * Lease deleteMany
   */
  export type LeaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leases to delete
     */
    where?: LeaseWhereInput
    /**
     * Limit how many Leases to delete.
     */
    limit?: number
  }

  /**
   * Lease.application
   */
  export type Lease$applicationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
  }

  /**
   * Lease.payments
   */
  export type Lease$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Lease without action
   */
  export type LeaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lease
     */
    select?: LeaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lease
     */
    omit?: LeaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaseInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    id: number | null
    amountDue: number | null
    amountPaid: number | null
    leaseId: number | null
  }

  export type PaymentSumAggregateOutputType = {
    id: number | null
    amountDue: number | null
    amountPaid: number | null
    leaseId: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: number | null
    amountDue: number | null
    amountPaid: number | null
    dueDate: Date | null
    paymentDate: Date | null
    paymentStatus: $Enums.PaymentStatus | null
    leaseId: number | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: number | null
    amountDue: number | null
    amountPaid: number | null
    dueDate: Date | null
    paymentDate: Date | null
    paymentStatus: $Enums.PaymentStatus | null
    leaseId: number | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    amountDue: number
    amountPaid: number
    dueDate: number
    paymentDate: number
    paymentStatus: number
    leaseId: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    id?: true
    amountDue?: true
    amountPaid?: true
    leaseId?: true
  }

  export type PaymentSumAggregateInputType = {
    id?: true
    amountDue?: true
    amountPaid?: true
    leaseId?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    amountDue?: true
    amountPaid?: true
    dueDate?: true
    paymentDate?: true
    paymentStatus?: true
    leaseId?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    amountDue?: true
    amountPaid?: true
    dueDate?: true
    paymentDate?: true
    paymentStatus?: true
    leaseId?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    amountDue?: true
    amountPaid?: true
    dueDate?: true
    paymentDate?: true
    paymentStatus?: true
    leaseId?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: number
    amountDue: number
    amountPaid: number
    dueDate: Date
    paymentDate: Date
    paymentStatus: $Enums.PaymentStatus
    leaseId: number
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    dueDate?: boolean
    paymentDate?: boolean
    paymentStatus?: boolean
    leaseId?: boolean
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    dueDate?: boolean
    paymentDate?: boolean
    paymentStatus?: boolean
    leaseId?: boolean
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    dueDate?: boolean
    paymentDate?: boolean
    paymentStatus?: boolean
    leaseId?: boolean
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    amountDue?: boolean
    amountPaid?: boolean
    dueDate?: boolean
    paymentDate?: boolean
    paymentStatus?: boolean
    leaseId?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amountDue" | "amountPaid" | "dueDate" | "paymentDate" | "paymentStatus" | "leaseId", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lease?: boolean | LeaseDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      lease: Prisma.$LeasePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amountDue: number
      amountPaid: number
      dueDate: Date
      paymentDate: Date
      paymentStatus: $Enums.PaymentStatus
      leaseId: number
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
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
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lease<T extends LeaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeaseDefaultArgs<ExtArgs>>): Prisma__LeaseClient<$Result.GetResult<Prisma.$LeasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'Int'>
    readonly amountDue: FieldRef<"Payment", 'Float'>
    readonly amountPaid: FieldRef<"Payment", 'Float'>
    readonly dueDate: FieldRef<"Payment", 'DateTime'>
    readonly paymentDate: FieldRef<"Payment", 'DateTime'>
    readonly paymentStatus: FieldRef<"Payment", 'PaymentStatus'>
    readonly leaseId: FieldRef<"Payment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
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


  export const CovoiturageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    photoUrls: 'photoUrls',
    isPetsAllowed: 'isPetsAllowed',
    carType: 'carType',
    postedDate: 'postedDate',
    averageRating: 'averageRating',
    numberOfReviews: 'numberOfReviews',
    locationId: 'locationId',
    conducteurCognitoId: 'conducteurCognitoId'
  };

  export type CovoiturageScalarFieldEnum = (typeof CovoiturageScalarFieldEnum)[keyof typeof CovoiturageScalarFieldEnum]


  export const ConducteurScalarFieldEnum: {
    id: 'id',
    cognitoId: 'cognitoId',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber'
  };

  export type ConducteurScalarFieldEnum = (typeof ConducteurScalarFieldEnum)[keyof typeof ConducteurScalarFieldEnum]


  export const PassagerScalarFieldEnum: {
    id: 'id',
    cognitoId: 'cognitoId',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber'
  };

  export type PassagerScalarFieldEnum = (typeof PassagerScalarFieldEnum)[keyof typeof PassagerScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    address: 'address',
    city: 'city',
    state: 'state',
    country: 'country',
    postalCode: 'postalCode'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    applicationDate: 'applicationDate',
    status: 'status',
    covoiturageId: 'covoiturageId',
    passagerCognitoId: 'passagerCognitoId',
    name: 'name',
    email: 'email',
    phoneNumber: 'phoneNumber',
    message: 'message',
    leaseId: 'leaseId'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const LeaseScalarFieldEnum: {
    id: 'id',
    startDate: 'startDate',
    endDate: 'endDate',
    covoiturageId: 'covoiturageId',
    passagerCognitoId: 'passagerCognitoId'
  };

  export type LeaseScalarFieldEnum = (typeof LeaseScalarFieldEnum)[keyof typeof LeaseScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    amountDue: 'amountDue',
    amountPaid: 'amountPaid',
    dueDate: 'dueDate',
    paymentDate: 'paymentDate',
    paymentStatus: 'paymentStatus',
    leaseId: 'leaseId'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'CarType'
   */
  export type EnumCarTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CarType'>
    


  /**
   * Reference to a field of type 'CarType[]'
   */
  export type ListEnumCarTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CarType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type CovoiturageWhereInput = {
    AND?: CovoiturageWhereInput | CovoiturageWhereInput[]
    OR?: CovoiturageWhereInput[]
    NOT?: CovoiturageWhereInput | CovoiturageWhereInput[]
    id?: IntFilter<"Covoiturage"> | number
    name?: StringFilter<"Covoiturage"> | string
    description?: StringFilter<"Covoiturage"> | string
    photoUrls?: StringNullableListFilter<"Covoiturage">
    isPetsAllowed?: BoolFilter<"Covoiturage"> | boolean
    carType?: EnumCarTypeFilter<"Covoiturage"> | $Enums.CarType
    postedDate?: DateTimeFilter<"Covoiturage"> | Date | string
    averageRating?: FloatNullableFilter<"Covoiturage"> | number | null
    numberOfReviews?: IntNullableFilter<"Covoiturage"> | number | null
    locationId?: IntFilter<"Covoiturage"> | number
    conducteurCognitoId?: StringFilter<"Covoiturage"> | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    conducteur?: XOR<ConducteurScalarRelationFilter, ConducteurWhereInput>
    leases?: LeaseListRelationFilter
    applications?: ApplicationListRelationFilter
    favoritedBy?: PassagerListRelationFilter
    passagers?: PassagerListRelationFilter
  }

  export type CovoiturageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    photoUrls?: SortOrder
    isPetsAllowed?: SortOrder
    carType?: SortOrder
    postedDate?: SortOrder
    averageRating?: SortOrderInput | SortOrder
    numberOfReviews?: SortOrderInput | SortOrder
    locationId?: SortOrder
    conducteurCognitoId?: SortOrder
    location?: LocationOrderByWithRelationInput
    conducteur?: ConducteurOrderByWithRelationInput
    leases?: LeaseOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
    favoritedBy?: PassagerOrderByRelationAggregateInput
    passagers?: PassagerOrderByRelationAggregateInput
  }

  export type CovoiturageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CovoiturageWhereInput | CovoiturageWhereInput[]
    OR?: CovoiturageWhereInput[]
    NOT?: CovoiturageWhereInput | CovoiturageWhereInput[]
    name?: StringFilter<"Covoiturage"> | string
    description?: StringFilter<"Covoiturage"> | string
    photoUrls?: StringNullableListFilter<"Covoiturage">
    isPetsAllowed?: BoolFilter<"Covoiturage"> | boolean
    carType?: EnumCarTypeFilter<"Covoiturage"> | $Enums.CarType
    postedDate?: DateTimeFilter<"Covoiturage"> | Date | string
    averageRating?: FloatNullableFilter<"Covoiturage"> | number | null
    numberOfReviews?: IntNullableFilter<"Covoiturage"> | number | null
    locationId?: IntFilter<"Covoiturage"> | number
    conducteurCognitoId?: StringFilter<"Covoiturage"> | string
    location?: XOR<LocationScalarRelationFilter, LocationWhereInput>
    conducteur?: XOR<ConducteurScalarRelationFilter, ConducteurWhereInput>
    leases?: LeaseListRelationFilter
    applications?: ApplicationListRelationFilter
    favoritedBy?: PassagerListRelationFilter
    passagers?: PassagerListRelationFilter
  }, "id">

  export type CovoiturageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    photoUrls?: SortOrder
    isPetsAllowed?: SortOrder
    carType?: SortOrder
    postedDate?: SortOrder
    averageRating?: SortOrderInput | SortOrder
    numberOfReviews?: SortOrderInput | SortOrder
    locationId?: SortOrder
    conducteurCognitoId?: SortOrder
    _count?: CovoiturageCountOrderByAggregateInput
    _avg?: CovoiturageAvgOrderByAggregateInput
    _max?: CovoiturageMaxOrderByAggregateInput
    _min?: CovoiturageMinOrderByAggregateInput
    _sum?: CovoiturageSumOrderByAggregateInput
  }

  export type CovoiturageScalarWhereWithAggregatesInput = {
    AND?: CovoiturageScalarWhereWithAggregatesInput | CovoiturageScalarWhereWithAggregatesInput[]
    OR?: CovoiturageScalarWhereWithAggregatesInput[]
    NOT?: CovoiturageScalarWhereWithAggregatesInput | CovoiturageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Covoiturage"> | number
    name?: StringWithAggregatesFilter<"Covoiturage"> | string
    description?: StringWithAggregatesFilter<"Covoiturage"> | string
    photoUrls?: StringNullableListFilter<"Covoiturage">
    isPetsAllowed?: BoolWithAggregatesFilter<"Covoiturage"> | boolean
    carType?: EnumCarTypeWithAggregatesFilter<"Covoiturage"> | $Enums.CarType
    postedDate?: DateTimeWithAggregatesFilter<"Covoiturage"> | Date | string
    averageRating?: FloatNullableWithAggregatesFilter<"Covoiturage"> | number | null
    numberOfReviews?: IntNullableWithAggregatesFilter<"Covoiturage"> | number | null
    locationId?: IntWithAggregatesFilter<"Covoiturage"> | number
    conducteurCognitoId?: StringWithAggregatesFilter<"Covoiturage"> | string
  }

  export type ConducteurWhereInput = {
    AND?: ConducteurWhereInput | ConducteurWhereInput[]
    OR?: ConducteurWhereInput[]
    NOT?: ConducteurWhereInput | ConducteurWhereInput[]
    id?: IntFilter<"Conducteur"> | number
    cognitoId?: StringFilter<"Conducteur"> | string
    name?: StringFilter<"Conducteur"> | string
    email?: StringFilter<"Conducteur"> | string
    phoneNumber?: StringFilter<"Conducteur"> | string
    conducteurCovoiturages?: CovoiturageListRelationFilter
  }

  export type ConducteurOrderByWithRelationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    conducteurCovoiturages?: CovoiturageOrderByRelationAggregateInput
  }

  export type ConducteurWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cognitoId?: string
    AND?: ConducteurWhereInput | ConducteurWhereInput[]
    OR?: ConducteurWhereInput[]
    NOT?: ConducteurWhereInput | ConducteurWhereInput[]
    name?: StringFilter<"Conducteur"> | string
    email?: StringFilter<"Conducteur"> | string
    phoneNumber?: StringFilter<"Conducteur"> | string
    conducteurCovoiturages?: CovoiturageListRelationFilter
  }, "id" | "cognitoId">

  export type ConducteurOrderByWithAggregationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    _count?: ConducteurCountOrderByAggregateInput
    _avg?: ConducteurAvgOrderByAggregateInput
    _max?: ConducteurMaxOrderByAggregateInput
    _min?: ConducteurMinOrderByAggregateInput
    _sum?: ConducteurSumOrderByAggregateInput
  }

  export type ConducteurScalarWhereWithAggregatesInput = {
    AND?: ConducteurScalarWhereWithAggregatesInput | ConducteurScalarWhereWithAggregatesInput[]
    OR?: ConducteurScalarWhereWithAggregatesInput[]
    NOT?: ConducteurScalarWhereWithAggregatesInput | ConducteurScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Conducteur"> | number
    cognitoId?: StringWithAggregatesFilter<"Conducteur"> | string
    name?: StringWithAggregatesFilter<"Conducteur"> | string
    email?: StringWithAggregatesFilter<"Conducteur"> | string
    phoneNumber?: StringWithAggregatesFilter<"Conducteur"> | string
  }

  export type PassagerWhereInput = {
    AND?: PassagerWhereInput | PassagerWhereInput[]
    OR?: PassagerWhereInput[]
    NOT?: PassagerWhereInput | PassagerWhereInput[]
    id?: IntFilter<"Passager"> | number
    cognitoId?: StringFilter<"Passager"> | string
    name?: StringFilter<"Passager"> | string
    email?: StringFilter<"Passager"> | string
    phoneNumber?: StringFilter<"Passager"> | string
    covoiturages?: CovoiturageListRelationFilter
    favorites?: CovoiturageListRelationFilter
    applications?: ApplicationListRelationFilter
    leases?: LeaseListRelationFilter
  }

  export type PassagerOrderByWithRelationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    covoiturages?: CovoiturageOrderByRelationAggregateInput
    favorites?: CovoiturageOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
    leases?: LeaseOrderByRelationAggregateInput
  }

  export type PassagerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cognitoId?: string
    AND?: PassagerWhereInput | PassagerWhereInput[]
    OR?: PassagerWhereInput[]
    NOT?: PassagerWhereInput | PassagerWhereInput[]
    name?: StringFilter<"Passager"> | string
    email?: StringFilter<"Passager"> | string
    phoneNumber?: StringFilter<"Passager"> | string
    covoiturages?: CovoiturageListRelationFilter
    favorites?: CovoiturageListRelationFilter
    applications?: ApplicationListRelationFilter
    leases?: LeaseListRelationFilter
  }, "id" | "cognitoId">

  export type PassagerOrderByWithAggregationInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    _count?: PassagerCountOrderByAggregateInput
    _avg?: PassagerAvgOrderByAggregateInput
    _max?: PassagerMaxOrderByAggregateInput
    _min?: PassagerMinOrderByAggregateInput
    _sum?: PassagerSumOrderByAggregateInput
  }

  export type PassagerScalarWhereWithAggregatesInput = {
    AND?: PassagerScalarWhereWithAggregatesInput | PassagerScalarWhereWithAggregatesInput[]
    OR?: PassagerScalarWhereWithAggregatesInput[]
    NOT?: PassagerScalarWhereWithAggregatesInput | PassagerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Passager"> | number
    cognitoId?: StringWithAggregatesFilter<"Passager"> | string
    name?: StringWithAggregatesFilter<"Passager"> | string
    email?: StringWithAggregatesFilter<"Passager"> | string
    phoneNumber?: StringWithAggregatesFilter<"Passager"> | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: IntFilter<"Location"> | number
    address?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    state?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    postalCode?: StringFilter<"Location"> | string
    covoiturages?: CovoiturageListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    covoiturages?: CovoiturageOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    address?: StringFilter<"Location"> | string
    city?: StringFilter<"Location"> | string
    state?: StringFilter<"Location"> | string
    country?: StringFilter<"Location"> | string
    postalCode?: StringFilter<"Location"> | string
    covoiturages?: CovoiturageListRelationFilter
  }, "id">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _avg?: LocationAvgOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
    _sum?: LocationSumOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Location"> | number
    address?: StringWithAggregatesFilter<"Location"> | string
    city?: StringWithAggregatesFilter<"Location"> | string
    state?: StringWithAggregatesFilter<"Location"> | string
    country?: StringWithAggregatesFilter<"Location"> | string
    postalCode?: StringWithAggregatesFilter<"Location"> | string
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: IntFilter<"Application"> | number
    applicationDate?: DateTimeFilter<"Application"> | Date | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    covoiturageId?: IntFilter<"Application"> | number
    passagerCognitoId?: StringFilter<"Application"> | string
    name?: StringFilter<"Application"> | string
    email?: StringFilter<"Application"> | string
    phoneNumber?: StringFilter<"Application"> | string
    message?: StringNullableFilter<"Application"> | string | null
    leaseId?: IntNullableFilter<"Application"> | number | null
    covoiturage?: XOR<CovoiturageScalarRelationFilter, CovoiturageWhereInput>
    passager?: XOR<PassagerScalarRelationFilter, PassagerWhereInput>
    lease?: XOR<LeaseNullableScalarRelationFilter, LeaseWhereInput> | null
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    applicationDate?: SortOrder
    status?: SortOrder
    covoiturageId?: SortOrder
    passagerCognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    message?: SortOrderInput | SortOrder
    leaseId?: SortOrderInput | SortOrder
    covoiturage?: CovoiturageOrderByWithRelationInput
    passager?: PassagerOrderByWithRelationInput
    lease?: LeaseOrderByWithRelationInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    leaseId?: number
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    applicationDate?: DateTimeFilter<"Application"> | Date | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    covoiturageId?: IntFilter<"Application"> | number
    passagerCognitoId?: StringFilter<"Application"> | string
    name?: StringFilter<"Application"> | string
    email?: StringFilter<"Application"> | string
    phoneNumber?: StringFilter<"Application"> | string
    message?: StringNullableFilter<"Application"> | string | null
    covoiturage?: XOR<CovoiturageScalarRelationFilter, CovoiturageWhereInput>
    passager?: XOR<PassagerScalarRelationFilter, PassagerWhereInput>
    lease?: XOR<LeaseNullableScalarRelationFilter, LeaseWhereInput> | null
  }, "id" | "leaseId">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    applicationDate?: SortOrder
    status?: SortOrder
    covoiturageId?: SortOrder
    passagerCognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    message?: SortOrderInput | SortOrder
    leaseId?: SortOrderInput | SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _avg?: ApplicationAvgOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
    _sum?: ApplicationSumOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Application"> | number
    applicationDate?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    status?: EnumApplicationStatusWithAggregatesFilter<"Application"> | $Enums.ApplicationStatus
    covoiturageId?: IntWithAggregatesFilter<"Application"> | number
    passagerCognitoId?: StringWithAggregatesFilter<"Application"> | string
    name?: StringWithAggregatesFilter<"Application"> | string
    email?: StringWithAggregatesFilter<"Application"> | string
    phoneNumber?: StringWithAggregatesFilter<"Application"> | string
    message?: StringNullableWithAggregatesFilter<"Application"> | string | null
    leaseId?: IntNullableWithAggregatesFilter<"Application"> | number | null
  }

  export type LeaseWhereInput = {
    AND?: LeaseWhereInput | LeaseWhereInput[]
    OR?: LeaseWhereInput[]
    NOT?: LeaseWhereInput | LeaseWhereInput[]
    id?: IntFilter<"Lease"> | number
    startDate?: DateTimeFilter<"Lease"> | Date | string
    endDate?: DateTimeFilter<"Lease"> | Date | string
    covoiturageId?: IntFilter<"Lease"> | number
    passagerCognitoId?: StringFilter<"Lease"> | string
    covoiturage?: XOR<CovoiturageScalarRelationFilter, CovoiturageWhereInput>
    passager?: XOR<PassagerScalarRelationFilter, PassagerWhereInput>
    application?: XOR<ApplicationNullableScalarRelationFilter, ApplicationWhereInput> | null
    payments?: PaymentListRelationFilter
  }

  export type LeaseOrderByWithRelationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    covoiturageId?: SortOrder
    passagerCognitoId?: SortOrder
    covoiturage?: CovoiturageOrderByWithRelationInput
    passager?: PassagerOrderByWithRelationInput
    application?: ApplicationOrderByWithRelationInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type LeaseWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LeaseWhereInput | LeaseWhereInput[]
    OR?: LeaseWhereInput[]
    NOT?: LeaseWhereInput | LeaseWhereInput[]
    startDate?: DateTimeFilter<"Lease"> | Date | string
    endDate?: DateTimeFilter<"Lease"> | Date | string
    covoiturageId?: IntFilter<"Lease"> | number
    passagerCognitoId?: StringFilter<"Lease"> | string
    covoiturage?: XOR<CovoiturageScalarRelationFilter, CovoiturageWhereInput>
    passager?: XOR<PassagerScalarRelationFilter, PassagerWhereInput>
    application?: XOR<ApplicationNullableScalarRelationFilter, ApplicationWhereInput> | null
    payments?: PaymentListRelationFilter
  }, "id">

  export type LeaseOrderByWithAggregationInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    covoiturageId?: SortOrder
    passagerCognitoId?: SortOrder
    _count?: LeaseCountOrderByAggregateInput
    _avg?: LeaseAvgOrderByAggregateInput
    _max?: LeaseMaxOrderByAggregateInput
    _min?: LeaseMinOrderByAggregateInput
    _sum?: LeaseSumOrderByAggregateInput
  }

  export type LeaseScalarWhereWithAggregatesInput = {
    AND?: LeaseScalarWhereWithAggregatesInput | LeaseScalarWhereWithAggregatesInput[]
    OR?: LeaseScalarWhereWithAggregatesInput[]
    NOT?: LeaseScalarWhereWithAggregatesInput | LeaseScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lease"> | number
    startDate?: DateTimeWithAggregatesFilter<"Lease"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Lease"> | Date | string
    covoiturageId?: IntWithAggregatesFilter<"Lease"> | number
    passagerCognitoId?: StringWithAggregatesFilter<"Lease"> | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: IntFilter<"Payment"> | number
    amountDue?: FloatFilter<"Payment"> | number
    amountPaid?: FloatFilter<"Payment"> | number
    dueDate?: DateTimeFilter<"Payment"> | Date | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    paymentStatus?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    leaseId?: IntFilter<"Payment"> | number
    lease?: XOR<LeaseScalarRelationFilter, LeaseWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrder
    paymentStatus?: SortOrder
    leaseId?: SortOrder
    lease?: LeaseOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amountDue?: FloatFilter<"Payment"> | number
    amountPaid?: FloatFilter<"Payment"> | number
    dueDate?: DateTimeFilter<"Payment"> | Date | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    paymentStatus?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    leaseId?: IntFilter<"Payment"> | number
    lease?: XOR<LeaseScalarRelationFilter, LeaseWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrder
    paymentStatus?: SortOrder
    leaseId?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Payment"> | number
    amountDue?: FloatWithAggregatesFilter<"Payment"> | number
    amountPaid?: FloatWithAggregatesFilter<"Payment"> | number
    dueDate?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    paymentDate?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    leaseId?: IntWithAggregatesFilter<"Payment"> | number
  }

  export type CovoiturageCreateInput = {
    name: string
    description: string
    photoUrls?: CovoiturageCreatephotoUrlsInput | string[]
    isPetsAllowed?: boolean
    carType: $Enums.CarType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    location: LocationCreateNestedOneWithoutCovoituragesInput
    conducteur: ConducteurCreateNestedOneWithoutConducteurCovoituragesInput
    leases?: LeaseCreateNestedManyWithoutCovoiturageInput
    applications?: ApplicationCreateNestedManyWithoutCovoiturageInput
    favoritedBy?: PassagerCreateNestedManyWithoutFavoritesInput
    passagers?: PassagerCreateNestedManyWithoutCovoituragesInput
  }

  export type CovoiturageUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    photoUrls?: CovoiturageCreatephotoUrlsInput | string[]
    isPetsAllowed?: boolean
    carType: $Enums.CarType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    conducteurCognitoId: string
    leases?: LeaseUncheckedCreateNestedManyWithoutCovoiturageInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCovoiturageInput
    favoritedBy?: PassagerUncheckedCreateNestedManyWithoutFavoritesInput
    passagers?: PassagerUncheckedCreateNestedManyWithoutCovoituragesInput
  }

  export type CovoiturageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: CovoiturageUpdatephotoUrlsInput | string[]
    isPetsAllowed?: BoolFieldUpdateOperationsInput | boolean
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    location?: LocationUpdateOneRequiredWithoutCovoituragesNestedInput
    conducteur?: ConducteurUpdateOneRequiredWithoutConducteurCovoituragesNestedInput
    leases?: LeaseUpdateManyWithoutCovoiturageNestedInput
    applications?: ApplicationUpdateManyWithoutCovoiturageNestedInput
    favoritedBy?: PassagerUpdateManyWithoutFavoritesNestedInput
    passagers?: PassagerUpdateManyWithoutCovoituragesNestedInput
  }

  export type CovoiturageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: CovoiturageUpdatephotoUrlsInput | string[]
    isPetsAllowed?: BoolFieldUpdateOperationsInput | boolean
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    conducteurCognitoId?: StringFieldUpdateOperationsInput | string
    leases?: LeaseUncheckedUpdateManyWithoutCovoiturageNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCovoiturageNestedInput
    favoritedBy?: PassagerUncheckedUpdateManyWithoutFavoritesNestedInput
    passagers?: PassagerUncheckedUpdateManyWithoutCovoituragesNestedInput
  }

  export type CovoiturageCreateManyInput = {
    id?: number
    name: string
    description: string
    photoUrls?: CovoiturageCreatephotoUrlsInput | string[]
    isPetsAllowed?: boolean
    carType: $Enums.CarType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    conducteurCognitoId: string
  }

  export type CovoiturageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: CovoiturageUpdatephotoUrlsInput | string[]
    isPetsAllowed?: BoolFieldUpdateOperationsInput | boolean
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CovoiturageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: CovoiturageUpdatephotoUrlsInput | string[]
    isPetsAllowed?: BoolFieldUpdateOperationsInput | boolean
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    conducteurCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type ConducteurCreateInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    conducteurCovoiturages?: CovoiturageCreateNestedManyWithoutConducteurInput
  }

  export type ConducteurUncheckedCreateInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    conducteurCovoiturages?: CovoiturageUncheckedCreateNestedManyWithoutConducteurInput
  }

  export type ConducteurUpdateInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    conducteurCovoiturages?: CovoiturageUpdateManyWithoutConducteurNestedInput
  }

  export type ConducteurUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    conducteurCovoiturages?: CovoiturageUncheckedUpdateManyWithoutConducteurNestedInput
  }

  export type ConducteurCreateManyInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
  }

  export type ConducteurUpdateManyMutationInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type ConducteurUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type PassagerCreateInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    covoiturages?: CovoiturageCreateNestedManyWithoutPassagersInput
    favorites?: CovoiturageCreateNestedManyWithoutFavoritedByInput
    applications?: ApplicationCreateNestedManyWithoutPassagerInput
    leases?: LeaseCreateNestedManyWithoutPassagerInput
  }

  export type PassagerUncheckedCreateInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    covoiturages?: CovoiturageUncheckedCreateNestedManyWithoutPassagersInput
    favorites?: CovoiturageUncheckedCreateNestedManyWithoutFavoritedByInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutPassagerInput
    leases?: LeaseUncheckedCreateNestedManyWithoutPassagerInput
  }

  export type PassagerUpdateInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    covoiturages?: CovoiturageUpdateManyWithoutPassagersNestedInput
    favorites?: CovoiturageUpdateManyWithoutFavoritedByNestedInput
    applications?: ApplicationUpdateManyWithoutPassagerNestedInput
    leases?: LeaseUpdateManyWithoutPassagerNestedInput
  }

  export type PassagerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    covoiturages?: CovoiturageUncheckedUpdateManyWithoutPassagersNestedInput
    favorites?: CovoiturageUncheckedUpdateManyWithoutFavoritedByNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutPassagerNestedInput
    leases?: LeaseUncheckedUpdateManyWithoutPassagerNestedInput
  }

  export type PassagerCreateManyInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
  }

  export type PassagerUpdateManyMutationInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type PassagerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUpdateInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    covoiturages?: CovoiturageUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    covoiturages?: CovoiturageUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationUpdateManyMutationInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationCreateInput = {
    applicationDate: Date | string
    status: $Enums.ApplicationStatus
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    covoiturage: CovoiturageCreateNestedOneWithoutApplicationsInput
    passager: PassagerCreateNestedOneWithoutApplicationsInput
    lease?: LeaseCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: number
    applicationDate: Date | string
    status: $Enums.ApplicationStatus
    covoiturageId: number
    passagerCognitoId: string
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    leaseId?: number | null
  }

  export type ApplicationUpdateInput = {
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    covoiturage?: CovoiturageUpdateOneRequiredWithoutApplicationsNestedInput
    passager?: PassagerUpdateOneRequiredWithoutApplicationsNestedInput
    lease?: LeaseUpdateOneWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    covoiturageId?: IntFieldUpdateOperationsInput | number
    passagerCognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    leaseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ApplicationCreateManyInput = {
    id?: number
    applicationDate: Date | string
    status: $Enums.ApplicationStatus
    covoiturageId: number
    passagerCognitoId: string
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    leaseId?: number | null
  }

  export type ApplicationUpdateManyMutationInput = {
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    covoiturageId?: IntFieldUpdateOperationsInput | number
    passagerCognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    leaseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LeaseCreateInput = {
    startDate: Date | string
    endDate: Date | string
    covoiturage: CovoiturageCreateNestedOneWithoutLeasesInput
    passager: PassagerCreateNestedOneWithoutLeasesInput
    application?: ApplicationCreateNestedOneWithoutLeaseInput
    payments?: PaymentCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    covoiturageId: number
    passagerCognitoId: string
    application?: ApplicationUncheckedCreateNestedOneWithoutLeaseInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUpdateInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    covoiturage?: CovoiturageUpdateOneRequiredWithoutLeasesNestedInput
    passager?: PassagerUpdateOneRequiredWithoutLeasesNestedInput
    application?: ApplicationUpdateOneWithoutLeaseNestedInput
    payments?: PaymentUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    covoiturageId?: IntFieldUpdateOperationsInput | number
    passagerCognitoId?: StringFieldUpdateOperationsInput | string
    application?: ApplicationUncheckedUpdateOneWithoutLeaseNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseCreateManyInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    covoiturageId: number
    passagerCognitoId: string
  }

  export type LeaseUpdateManyMutationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeaseUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    covoiturageId?: IntFieldUpdateOperationsInput | number
    passagerCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateInput = {
    amountDue: number
    amountPaid: number
    dueDate: Date | string
    paymentDate: Date | string
    paymentStatus: $Enums.PaymentStatus
    lease: LeaseCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: number
    amountDue: number
    amountPaid: number
    dueDate: Date | string
    paymentDate: Date | string
    paymentStatus: $Enums.PaymentStatus
    leaseId: number
  }

  export type PaymentUpdateInput = {
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    lease?: LeaseUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    leaseId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentCreateManyInput = {
    id?: number
    amountDue: number
    amountPaid: number
    dueDate: Date | string
    paymentDate: Date | string
    paymentStatus: $Enums.PaymentStatus
    leaseId: number
  }

  export type PaymentUpdateManyMutationInput = {
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    leaseId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumCarTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CarType | EnumCarTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCarTypeFilter<$PrismaModel> | $Enums.CarType
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type LocationScalarRelationFilter = {
    is?: LocationWhereInput
    isNot?: LocationWhereInput
  }

  export type ConducteurScalarRelationFilter = {
    is?: ConducteurWhereInput
    isNot?: ConducteurWhereInput
  }

  export type LeaseListRelationFilter = {
    every?: LeaseWhereInput
    some?: LeaseWhereInput
    none?: LeaseWhereInput
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type PassagerListRelationFilter = {
    every?: PassagerWhereInput
    some?: PassagerWhereInput
    none?: PassagerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LeaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PassagerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CovoiturageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    photoUrls?: SortOrder
    isPetsAllowed?: SortOrder
    carType?: SortOrder
    postedDate?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
    conducteurCognitoId?: SortOrder
  }

  export type CovoiturageAvgOrderByAggregateInput = {
    id?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
  }

  export type CovoiturageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPetsAllowed?: SortOrder
    carType?: SortOrder
    postedDate?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
    conducteurCognitoId?: SortOrder
  }

  export type CovoiturageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isPetsAllowed?: SortOrder
    carType?: SortOrder
    postedDate?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
    conducteurCognitoId?: SortOrder
  }

  export type CovoiturageSumOrderByAggregateInput = {
    id?: SortOrder
    averageRating?: SortOrder
    numberOfReviews?: SortOrder
    locationId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumCarTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CarType | EnumCarTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCarTypeWithAggregatesFilter<$PrismaModel> | $Enums.CarType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCarTypeFilter<$PrismaModel>
    _max?: NestedEnumCarTypeFilter<$PrismaModel>
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CovoiturageListRelationFilter = {
    every?: CovoiturageWhereInput
    some?: CovoiturageWhereInput
    none?: CovoiturageWhereInput
  }

  export type CovoiturageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ConducteurCountOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type ConducteurAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ConducteurMaxOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type ConducteurMinOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type ConducteurSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PassagerCountOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type PassagerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PassagerMaxOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type PassagerMinOrderByAggregateInput = {
    id?: SortOrder
    cognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
  }

  export type PassagerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type LocationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postalCode?: SortOrder
  }

  export type LocationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
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

  export type CovoiturageScalarRelationFilter = {
    is?: CovoiturageWhereInput
    isNot?: CovoiturageWhereInput
  }

  export type PassagerScalarRelationFilter = {
    is?: PassagerWhereInput
    isNot?: PassagerWhereInput
  }

  export type LeaseNullableScalarRelationFilter = {
    is?: LeaseWhereInput | null
    isNot?: LeaseWhereInput | null
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    applicationDate?: SortOrder
    status?: SortOrder
    covoiturageId?: SortOrder
    passagerCognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    message?: SortOrder
    leaseId?: SortOrder
  }

  export type ApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
    covoiturageId?: SortOrder
    leaseId?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationDate?: SortOrder
    status?: SortOrder
    covoiturageId?: SortOrder
    passagerCognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    message?: SortOrder
    leaseId?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    applicationDate?: SortOrder
    status?: SortOrder
    covoiturageId?: SortOrder
    passagerCognitoId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    message?: SortOrder
    leaseId?: SortOrder
  }

  export type ApplicationSumOrderByAggregateInput = {
    id?: SortOrder
    covoiturageId?: SortOrder
    leaseId?: SortOrder
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
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

  export type ApplicationNullableScalarRelationFilter = {
    is?: ApplicationWhereInput | null
    isNot?: ApplicationWhereInput | null
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaseCountOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    covoiturageId?: SortOrder
    passagerCognitoId?: SortOrder
  }

  export type LeaseAvgOrderByAggregateInput = {
    id?: SortOrder
    covoiturageId?: SortOrder
  }

  export type LeaseMaxOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    covoiturageId?: SortOrder
    passagerCognitoId?: SortOrder
  }

  export type LeaseMinOrderByAggregateInput = {
    id?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    covoiturageId?: SortOrder
    passagerCognitoId?: SortOrder
  }

  export type LeaseSumOrderByAggregateInput = {
    id?: SortOrder
    covoiturageId?: SortOrder
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

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type LeaseScalarRelationFilter = {
    is?: LeaseWhereInput
    isNot?: LeaseWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrder
    paymentStatus?: SortOrder
    leaseId?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    leaseId?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrder
    paymentStatus?: SortOrder
    leaseId?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    dueDate?: SortOrder
    paymentDate?: SortOrder
    paymentStatus?: SortOrder
    leaseId?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    id?: SortOrder
    amountDue?: SortOrder
    amountPaid?: SortOrder
    leaseId?: SortOrder
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

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type CovoiturageCreatephotoUrlsInput = {
    set: string[]
  }

  export type LocationCreateNestedOneWithoutCovoituragesInput = {
    connect?: LocationWhereUniqueInput
  }

  export type ConducteurCreateNestedOneWithoutConducteurCovoituragesInput = {
    create?: XOR<ConducteurCreateWithoutConducteurCovoituragesInput, ConducteurUncheckedCreateWithoutConducteurCovoituragesInput>
    connectOrCreate?: ConducteurCreateOrConnectWithoutConducteurCovoituragesInput
    connect?: ConducteurWhereUniqueInput
  }

  export type LeaseCreateNestedManyWithoutCovoiturageInput = {
    create?: XOR<LeaseCreateWithoutCovoiturageInput, LeaseUncheckedCreateWithoutCovoiturageInput> | LeaseCreateWithoutCovoiturageInput[] | LeaseUncheckedCreateWithoutCovoiturageInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutCovoiturageInput | LeaseCreateOrConnectWithoutCovoiturageInput[]
    createMany?: LeaseCreateManyCovoiturageInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutCovoiturageInput = {
    create?: XOR<ApplicationCreateWithoutCovoiturageInput, ApplicationUncheckedCreateWithoutCovoiturageInput> | ApplicationCreateWithoutCovoiturageInput[] | ApplicationUncheckedCreateWithoutCovoiturageInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCovoiturageInput | ApplicationCreateOrConnectWithoutCovoiturageInput[]
    createMany?: ApplicationCreateManyCovoiturageInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type PassagerCreateNestedManyWithoutFavoritesInput = {
    create?: XOR<PassagerCreateWithoutFavoritesInput, PassagerUncheckedCreateWithoutFavoritesInput> | PassagerCreateWithoutFavoritesInput[] | PassagerUncheckedCreateWithoutFavoritesInput[]
    connectOrCreate?: PassagerCreateOrConnectWithoutFavoritesInput | PassagerCreateOrConnectWithoutFavoritesInput[]
    connect?: PassagerWhereUniqueInput | PassagerWhereUniqueInput[]
  }

  export type PassagerCreateNestedManyWithoutCovoituragesInput = {
    create?: XOR<PassagerCreateWithoutCovoituragesInput, PassagerUncheckedCreateWithoutCovoituragesInput> | PassagerCreateWithoutCovoituragesInput[] | PassagerUncheckedCreateWithoutCovoituragesInput[]
    connectOrCreate?: PassagerCreateOrConnectWithoutCovoituragesInput | PassagerCreateOrConnectWithoutCovoituragesInput[]
    connect?: PassagerWhereUniqueInput | PassagerWhereUniqueInput[]
  }

  export type LeaseUncheckedCreateNestedManyWithoutCovoiturageInput = {
    create?: XOR<LeaseCreateWithoutCovoiturageInput, LeaseUncheckedCreateWithoutCovoiturageInput> | LeaseCreateWithoutCovoiturageInput[] | LeaseUncheckedCreateWithoutCovoiturageInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutCovoiturageInput | LeaseCreateOrConnectWithoutCovoiturageInput[]
    createMany?: LeaseCreateManyCovoiturageInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutCovoiturageInput = {
    create?: XOR<ApplicationCreateWithoutCovoiturageInput, ApplicationUncheckedCreateWithoutCovoiturageInput> | ApplicationCreateWithoutCovoiturageInput[] | ApplicationUncheckedCreateWithoutCovoiturageInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCovoiturageInput | ApplicationCreateOrConnectWithoutCovoiturageInput[]
    createMany?: ApplicationCreateManyCovoiturageInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type PassagerUncheckedCreateNestedManyWithoutFavoritesInput = {
    create?: XOR<PassagerCreateWithoutFavoritesInput, PassagerUncheckedCreateWithoutFavoritesInput> | PassagerCreateWithoutFavoritesInput[] | PassagerUncheckedCreateWithoutFavoritesInput[]
    connectOrCreate?: PassagerCreateOrConnectWithoutFavoritesInput | PassagerCreateOrConnectWithoutFavoritesInput[]
    connect?: PassagerWhereUniqueInput | PassagerWhereUniqueInput[]
  }

  export type PassagerUncheckedCreateNestedManyWithoutCovoituragesInput = {
    create?: XOR<PassagerCreateWithoutCovoituragesInput, PassagerUncheckedCreateWithoutCovoituragesInput> | PassagerCreateWithoutCovoituragesInput[] | PassagerUncheckedCreateWithoutCovoituragesInput[]
    connectOrCreate?: PassagerCreateOrConnectWithoutCovoituragesInput | PassagerCreateOrConnectWithoutCovoituragesInput[]
    connect?: PassagerWhereUniqueInput | PassagerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CovoiturageUpdatephotoUrlsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumCarTypeFieldUpdateOperationsInput = {
    set?: $Enums.CarType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LocationUpdateOneRequiredWithoutCovoituragesNestedInput = {
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutCovoituragesInput, LocationUpdateWithoutCovoituragesInput>, LocationUncheckedUpdateWithoutCovoituragesInput>
  }

  export type ConducteurUpdateOneRequiredWithoutConducteurCovoituragesNestedInput = {
    create?: XOR<ConducteurCreateWithoutConducteurCovoituragesInput, ConducteurUncheckedCreateWithoutConducteurCovoituragesInput>
    connectOrCreate?: ConducteurCreateOrConnectWithoutConducteurCovoituragesInput
    upsert?: ConducteurUpsertWithoutConducteurCovoituragesInput
    connect?: ConducteurWhereUniqueInput
    update?: XOR<XOR<ConducteurUpdateToOneWithWhereWithoutConducteurCovoituragesInput, ConducteurUpdateWithoutConducteurCovoituragesInput>, ConducteurUncheckedUpdateWithoutConducteurCovoituragesInput>
  }

  export type LeaseUpdateManyWithoutCovoiturageNestedInput = {
    create?: XOR<LeaseCreateWithoutCovoiturageInput, LeaseUncheckedCreateWithoutCovoiturageInput> | LeaseCreateWithoutCovoiturageInput[] | LeaseUncheckedCreateWithoutCovoiturageInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutCovoiturageInput | LeaseCreateOrConnectWithoutCovoiturageInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutCovoiturageInput | LeaseUpsertWithWhereUniqueWithoutCovoiturageInput[]
    createMany?: LeaseCreateManyCovoiturageInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutCovoiturageInput | LeaseUpdateWithWhereUniqueWithoutCovoiturageInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutCovoiturageInput | LeaseUpdateManyWithWhereWithoutCovoiturageInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutCovoiturageNestedInput = {
    create?: XOR<ApplicationCreateWithoutCovoiturageInput, ApplicationUncheckedCreateWithoutCovoiturageInput> | ApplicationCreateWithoutCovoiturageInput[] | ApplicationUncheckedCreateWithoutCovoiturageInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCovoiturageInput | ApplicationCreateOrConnectWithoutCovoiturageInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutCovoiturageInput | ApplicationUpsertWithWhereUniqueWithoutCovoiturageInput[]
    createMany?: ApplicationCreateManyCovoiturageInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutCovoiturageInput | ApplicationUpdateWithWhereUniqueWithoutCovoiturageInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutCovoiturageInput | ApplicationUpdateManyWithWhereWithoutCovoiturageInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type PassagerUpdateManyWithoutFavoritesNestedInput = {
    create?: XOR<PassagerCreateWithoutFavoritesInput, PassagerUncheckedCreateWithoutFavoritesInput> | PassagerCreateWithoutFavoritesInput[] | PassagerUncheckedCreateWithoutFavoritesInput[]
    connectOrCreate?: PassagerCreateOrConnectWithoutFavoritesInput | PassagerCreateOrConnectWithoutFavoritesInput[]
    upsert?: PassagerUpsertWithWhereUniqueWithoutFavoritesInput | PassagerUpsertWithWhereUniqueWithoutFavoritesInput[]
    set?: PassagerWhereUniqueInput | PassagerWhereUniqueInput[]
    disconnect?: PassagerWhereUniqueInput | PassagerWhereUniqueInput[]
    delete?: PassagerWhereUniqueInput | PassagerWhereUniqueInput[]
    connect?: PassagerWhereUniqueInput | PassagerWhereUniqueInput[]
    update?: PassagerUpdateWithWhereUniqueWithoutFavoritesInput | PassagerUpdateWithWhereUniqueWithoutFavoritesInput[]
    updateMany?: PassagerUpdateManyWithWhereWithoutFavoritesInput | PassagerUpdateManyWithWhereWithoutFavoritesInput[]
    deleteMany?: PassagerScalarWhereInput | PassagerScalarWhereInput[]
  }

  export type PassagerUpdateManyWithoutCovoituragesNestedInput = {
    create?: XOR<PassagerCreateWithoutCovoituragesInput, PassagerUncheckedCreateWithoutCovoituragesInput> | PassagerCreateWithoutCovoituragesInput[] | PassagerUncheckedCreateWithoutCovoituragesInput[]
    connectOrCreate?: PassagerCreateOrConnectWithoutCovoituragesInput | PassagerCreateOrConnectWithoutCovoituragesInput[]
    upsert?: PassagerUpsertWithWhereUniqueWithoutCovoituragesInput | PassagerUpsertWithWhereUniqueWithoutCovoituragesInput[]
    set?: PassagerWhereUniqueInput | PassagerWhereUniqueInput[]
    disconnect?: PassagerWhereUniqueInput | PassagerWhereUniqueInput[]
    delete?: PassagerWhereUniqueInput | PassagerWhereUniqueInput[]
    connect?: PassagerWhereUniqueInput | PassagerWhereUniqueInput[]
    update?: PassagerUpdateWithWhereUniqueWithoutCovoituragesInput | PassagerUpdateWithWhereUniqueWithoutCovoituragesInput[]
    updateMany?: PassagerUpdateManyWithWhereWithoutCovoituragesInput | PassagerUpdateManyWithWhereWithoutCovoituragesInput[]
    deleteMany?: PassagerScalarWhereInput | PassagerScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LeaseUncheckedUpdateManyWithoutCovoiturageNestedInput = {
    create?: XOR<LeaseCreateWithoutCovoiturageInput, LeaseUncheckedCreateWithoutCovoiturageInput> | LeaseCreateWithoutCovoiturageInput[] | LeaseUncheckedCreateWithoutCovoiturageInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutCovoiturageInput | LeaseCreateOrConnectWithoutCovoiturageInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutCovoiturageInput | LeaseUpsertWithWhereUniqueWithoutCovoiturageInput[]
    createMany?: LeaseCreateManyCovoiturageInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutCovoiturageInput | LeaseUpdateWithWhereUniqueWithoutCovoiturageInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutCovoiturageInput | LeaseUpdateManyWithWhereWithoutCovoiturageInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutCovoiturageNestedInput = {
    create?: XOR<ApplicationCreateWithoutCovoiturageInput, ApplicationUncheckedCreateWithoutCovoiturageInput> | ApplicationCreateWithoutCovoiturageInput[] | ApplicationUncheckedCreateWithoutCovoiturageInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutCovoiturageInput | ApplicationCreateOrConnectWithoutCovoiturageInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutCovoiturageInput | ApplicationUpsertWithWhereUniqueWithoutCovoiturageInput[]
    createMany?: ApplicationCreateManyCovoiturageInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutCovoiturageInput | ApplicationUpdateWithWhereUniqueWithoutCovoiturageInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutCovoiturageInput | ApplicationUpdateManyWithWhereWithoutCovoiturageInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type PassagerUncheckedUpdateManyWithoutFavoritesNestedInput = {
    create?: XOR<PassagerCreateWithoutFavoritesInput, PassagerUncheckedCreateWithoutFavoritesInput> | PassagerCreateWithoutFavoritesInput[] | PassagerUncheckedCreateWithoutFavoritesInput[]
    connectOrCreate?: PassagerCreateOrConnectWithoutFavoritesInput | PassagerCreateOrConnectWithoutFavoritesInput[]
    upsert?: PassagerUpsertWithWhereUniqueWithoutFavoritesInput | PassagerUpsertWithWhereUniqueWithoutFavoritesInput[]
    set?: PassagerWhereUniqueInput | PassagerWhereUniqueInput[]
    disconnect?: PassagerWhereUniqueInput | PassagerWhereUniqueInput[]
    delete?: PassagerWhereUniqueInput | PassagerWhereUniqueInput[]
    connect?: PassagerWhereUniqueInput | PassagerWhereUniqueInput[]
    update?: PassagerUpdateWithWhereUniqueWithoutFavoritesInput | PassagerUpdateWithWhereUniqueWithoutFavoritesInput[]
    updateMany?: PassagerUpdateManyWithWhereWithoutFavoritesInput | PassagerUpdateManyWithWhereWithoutFavoritesInput[]
    deleteMany?: PassagerScalarWhereInput | PassagerScalarWhereInput[]
  }

  export type PassagerUncheckedUpdateManyWithoutCovoituragesNestedInput = {
    create?: XOR<PassagerCreateWithoutCovoituragesInput, PassagerUncheckedCreateWithoutCovoituragesInput> | PassagerCreateWithoutCovoituragesInput[] | PassagerUncheckedCreateWithoutCovoituragesInput[]
    connectOrCreate?: PassagerCreateOrConnectWithoutCovoituragesInput | PassagerCreateOrConnectWithoutCovoituragesInput[]
    upsert?: PassagerUpsertWithWhereUniqueWithoutCovoituragesInput | PassagerUpsertWithWhereUniqueWithoutCovoituragesInput[]
    set?: PassagerWhereUniqueInput | PassagerWhereUniqueInput[]
    disconnect?: PassagerWhereUniqueInput | PassagerWhereUniqueInput[]
    delete?: PassagerWhereUniqueInput | PassagerWhereUniqueInput[]
    connect?: PassagerWhereUniqueInput | PassagerWhereUniqueInput[]
    update?: PassagerUpdateWithWhereUniqueWithoutCovoituragesInput | PassagerUpdateWithWhereUniqueWithoutCovoituragesInput[]
    updateMany?: PassagerUpdateManyWithWhereWithoutCovoituragesInput | PassagerUpdateManyWithWhereWithoutCovoituragesInput[]
    deleteMany?: PassagerScalarWhereInput | PassagerScalarWhereInput[]
  }

  export type CovoiturageCreateNestedManyWithoutConducteurInput = {
    create?: XOR<CovoiturageCreateWithoutConducteurInput, CovoiturageUncheckedCreateWithoutConducteurInput> | CovoiturageCreateWithoutConducteurInput[] | CovoiturageUncheckedCreateWithoutConducteurInput[]
    connectOrCreate?: CovoiturageCreateOrConnectWithoutConducteurInput | CovoiturageCreateOrConnectWithoutConducteurInput[]
    createMany?: CovoiturageCreateManyConducteurInputEnvelope
    connect?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
  }

  export type CovoiturageUncheckedCreateNestedManyWithoutConducteurInput = {
    create?: XOR<CovoiturageCreateWithoutConducteurInput, CovoiturageUncheckedCreateWithoutConducteurInput> | CovoiturageCreateWithoutConducteurInput[] | CovoiturageUncheckedCreateWithoutConducteurInput[]
    connectOrCreate?: CovoiturageCreateOrConnectWithoutConducteurInput | CovoiturageCreateOrConnectWithoutConducteurInput[]
    createMany?: CovoiturageCreateManyConducteurInputEnvelope
    connect?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
  }

  export type CovoiturageUpdateManyWithoutConducteurNestedInput = {
    create?: XOR<CovoiturageCreateWithoutConducteurInput, CovoiturageUncheckedCreateWithoutConducteurInput> | CovoiturageCreateWithoutConducteurInput[] | CovoiturageUncheckedCreateWithoutConducteurInput[]
    connectOrCreate?: CovoiturageCreateOrConnectWithoutConducteurInput | CovoiturageCreateOrConnectWithoutConducteurInput[]
    upsert?: CovoiturageUpsertWithWhereUniqueWithoutConducteurInput | CovoiturageUpsertWithWhereUniqueWithoutConducteurInput[]
    createMany?: CovoiturageCreateManyConducteurInputEnvelope
    set?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    disconnect?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    delete?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    connect?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    update?: CovoiturageUpdateWithWhereUniqueWithoutConducteurInput | CovoiturageUpdateWithWhereUniqueWithoutConducteurInput[]
    updateMany?: CovoiturageUpdateManyWithWhereWithoutConducteurInput | CovoiturageUpdateManyWithWhereWithoutConducteurInput[]
    deleteMany?: CovoiturageScalarWhereInput | CovoiturageScalarWhereInput[]
  }

  export type CovoiturageUncheckedUpdateManyWithoutConducteurNestedInput = {
    create?: XOR<CovoiturageCreateWithoutConducteurInput, CovoiturageUncheckedCreateWithoutConducteurInput> | CovoiturageCreateWithoutConducteurInput[] | CovoiturageUncheckedCreateWithoutConducteurInput[]
    connectOrCreate?: CovoiturageCreateOrConnectWithoutConducteurInput | CovoiturageCreateOrConnectWithoutConducteurInput[]
    upsert?: CovoiturageUpsertWithWhereUniqueWithoutConducteurInput | CovoiturageUpsertWithWhereUniqueWithoutConducteurInput[]
    createMany?: CovoiturageCreateManyConducteurInputEnvelope
    set?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    disconnect?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    delete?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    connect?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    update?: CovoiturageUpdateWithWhereUniqueWithoutConducteurInput | CovoiturageUpdateWithWhereUniqueWithoutConducteurInput[]
    updateMany?: CovoiturageUpdateManyWithWhereWithoutConducteurInput | CovoiturageUpdateManyWithWhereWithoutConducteurInput[]
    deleteMany?: CovoiturageScalarWhereInput | CovoiturageScalarWhereInput[]
  }

  export type CovoiturageCreateNestedManyWithoutPassagersInput = {
    create?: XOR<CovoiturageCreateWithoutPassagersInput, CovoiturageUncheckedCreateWithoutPassagersInput> | CovoiturageCreateWithoutPassagersInput[] | CovoiturageUncheckedCreateWithoutPassagersInput[]
    connectOrCreate?: CovoiturageCreateOrConnectWithoutPassagersInput | CovoiturageCreateOrConnectWithoutPassagersInput[]
    connect?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
  }

  export type CovoiturageCreateNestedManyWithoutFavoritedByInput = {
    create?: XOR<CovoiturageCreateWithoutFavoritedByInput, CovoiturageUncheckedCreateWithoutFavoritedByInput> | CovoiturageCreateWithoutFavoritedByInput[] | CovoiturageUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: CovoiturageCreateOrConnectWithoutFavoritedByInput | CovoiturageCreateOrConnectWithoutFavoritedByInput[]
    connect?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutPassagerInput = {
    create?: XOR<ApplicationCreateWithoutPassagerInput, ApplicationUncheckedCreateWithoutPassagerInput> | ApplicationCreateWithoutPassagerInput[] | ApplicationUncheckedCreateWithoutPassagerInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutPassagerInput | ApplicationCreateOrConnectWithoutPassagerInput[]
    createMany?: ApplicationCreateManyPassagerInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type LeaseCreateNestedManyWithoutPassagerInput = {
    create?: XOR<LeaseCreateWithoutPassagerInput, LeaseUncheckedCreateWithoutPassagerInput> | LeaseCreateWithoutPassagerInput[] | LeaseUncheckedCreateWithoutPassagerInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutPassagerInput | LeaseCreateOrConnectWithoutPassagerInput[]
    createMany?: LeaseCreateManyPassagerInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type CovoiturageUncheckedCreateNestedManyWithoutPassagersInput = {
    create?: XOR<CovoiturageCreateWithoutPassagersInput, CovoiturageUncheckedCreateWithoutPassagersInput> | CovoiturageCreateWithoutPassagersInput[] | CovoiturageUncheckedCreateWithoutPassagersInput[]
    connectOrCreate?: CovoiturageCreateOrConnectWithoutPassagersInput | CovoiturageCreateOrConnectWithoutPassagersInput[]
    connect?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
  }

  export type CovoiturageUncheckedCreateNestedManyWithoutFavoritedByInput = {
    create?: XOR<CovoiturageCreateWithoutFavoritedByInput, CovoiturageUncheckedCreateWithoutFavoritedByInput> | CovoiturageCreateWithoutFavoritedByInput[] | CovoiturageUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: CovoiturageCreateOrConnectWithoutFavoritedByInput | CovoiturageCreateOrConnectWithoutFavoritedByInput[]
    connect?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutPassagerInput = {
    create?: XOR<ApplicationCreateWithoutPassagerInput, ApplicationUncheckedCreateWithoutPassagerInput> | ApplicationCreateWithoutPassagerInput[] | ApplicationUncheckedCreateWithoutPassagerInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutPassagerInput | ApplicationCreateOrConnectWithoutPassagerInput[]
    createMany?: ApplicationCreateManyPassagerInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type LeaseUncheckedCreateNestedManyWithoutPassagerInput = {
    create?: XOR<LeaseCreateWithoutPassagerInput, LeaseUncheckedCreateWithoutPassagerInput> | LeaseCreateWithoutPassagerInput[] | LeaseUncheckedCreateWithoutPassagerInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutPassagerInput | LeaseCreateOrConnectWithoutPassagerInput[]
    createMany?: LeaseCreateManyPassagerInputEnvelope
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
  }

  export type CovoiturageUpdateManyWithoutPassagersNestedInput = {
    create?: XOR<CovoiturageCreateWithoutPassagersInput, CovoiturageUncheckedCreateWithoutPassagersInput> | CovoiturageCreateWithoutPassagersInput[] | CovoiturageUncheckedCreateWithoutPassagersInput[]
    connectOrCreate?: CovoiturageCreateOrConnectWithoutPassagersInput | CovoiturageCreateOrConnectWithoutPassagersInput[]
    upsert?: CovoiturageUpsertWithWhereUniqueWithoutPassagersInput | CovoiturageUpsertWithWhereUniqueWithoutPassagersInput[]
    set?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    disconnect?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    delete?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    connect?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    update?: CovoiturageUpdateWithWhereUniqueWithoutPassagersInput | CovoiturageUpdateWithWhereUniqueWithoutPassagersInput[]
    updateMany?: CovoiturageUpdateManyWithWhereWithoutPassagersInput | CovoiturageUpdateManyWithWhereWithoutPassagersInput[]
    deleteMany?: CovoiturageScalarWhereInput | CovoiturageScalarWhereInput[]
  }

  export type CovoiturageUpdateManyWithoutFavoritedByNestedInput = {
    create?: XOR<CovoiturageCreateWithoutFavoritedByInput, CovoiturageUncheckedCreateWithoutFavoritedByInput> | CovoiturageCreateWithoutFavoritedByInput[] | CovoiturageUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: CovoiturageCreateOrConnectWithoutFavoritedByInput | CovoiturageCreateOrConnectWithoutFavoritedByInput[]
    upsert?: CovoiturageUpsertWithWhereUniqueWithoutFavoritedByInput | CovoiturageUpsertWithWhereUniqueWithoutFavoritedByInput[]
    set?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    disconnect?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    delete?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    connect?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    update?: CovoiturageUpdateWithWhereUniqueWithoutFavoritedByInput | CovoiturageUpdateWithWhereUniqueWithoutFavoritedByInput[]
    updateMany?: CovoiturageUpdateManyWithWhereWithoutFavoritedByInput | CovoiturageUpdateManyWithWhereWithoutFavoritedByInput[]
    deleteMany?: CovoiturageScalarWhereInput | CovoiturageScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutPassagerNestedInput = {
    create?: XOR<ApplicationCreateWithoutPassagerInput, ApplicationUncheckedCreateWithoutPassagerInput> | ApplicationCreateWithoutPassagerInput[] | ApplicationUncheckedCreateWithoutPassagerInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutPassagerInput | ApplicationCreateOrConnectWithoutPassagerInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutPassagerInput | ApplicationUpsertWithWhereUniqueWithoutPassagerInput[]
    createMany?: ApplicationCreateManyPassagerInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutPassagerInput | ApplicationUpdateWithWhereUniqueWithoutPassagerInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutPassagerInput | ApplicationUpdateManyWithWhereWithoutPassagerInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type LeaseUpdateManyWithoutPassagerNestedInput = {
    create?: XOR<LeaseCreateWithoutPassagerInput, LeaseUncheckedCreateWithoutPassagerInput> | LeaseCreateWithoutPassagerInput[] | LeaseUncheckedCreateWithoutPassagerInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutPassagerInput | LeaseCreateOrConnectWithoutPassagerInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutPassagerInput | LeaseUpsertWithWhereUniqueWithoutPassagerInput[]
    createMany?: LeaseCreateManyPassagerInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutPassagerInput | LeaseUpdateWithWhereUniqueWithoutPassagerInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutPassagerInput | LeaseUpdateManyWithWhereWithoutPassagerInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type CovoiturageUncheckedUpdateManyWithoutPassagersNestedInput = {
    create?: XOR<CovoiturageCreateWithoutPassagersInput, CovoiturageUncheckedCreateWithoutPassagersInput> | CovoiturageCreateWithoutPassagersInput[] | CovoiturageUncheckedCreateWithoutPassagersInput[]
    connectOrCreate?: CovoiturageCreateOrConnectWithoutPassagersInput | CovoiturageCreateOrConnectWithoutPassagersInput[]
    upsert?: CovoiturageUpsertWithWhereUniqueWithoutPassagersInput | CovoiturageUpsertWithWhereUniqueWithoutPassagersInput[]
    set?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    disconnect?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    delete?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    connect?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    update?: CovoiturageUpdateWithWhereUniqueWithoutPassagersInput | CovoiturageUpdateWithWhereUniqueWithoutPassagersInput[]
    updateMany?: CovoiturageUpdateManyWithWhereWithoutPassagersInput | CovoiturageUpdateManyWithWhereWithoutPassagersInput[]
    deleteMany?: CovoiturageScalarWhereInput | CovoiturageScalarWhereInput[]
  }

  export type CovoiturageUncheckedUpdateManyWithoutFavoritedByNestedInput = {
    create?: XOR<CovoiturageCreateWithoutFavoritedByInput, CovoiturageUncheckedCreateWithoutFavoritedByInput> | CovoiturageCreateWithoutFavoritedByInput[] | CovoiturageUncheckedCreateWithoutFavoritedByInput[]
    connectOrCreate?: CovoiturageCreateOrConnectWithoutFavoritedByInput | CovoiturageCreateOrConnectWithoutFavoritedByInput[]
    upsert?: CovoiturageUpsertWithWhereUniqueWithoutFavoritedByInput | CovoiturageUpsertWithWhereUniqueWithoutFavoritedByInput[]
    set?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    disconnect?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    delete?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    connect?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    update?: CovoiturageUpdateWithWhereUniqueWithoutFavoritedByInput | CovoiturageUpdateWithWhereUniqueWithoutFavoritedByInput[]
    updateMany?: CovoiturageUpdateManyWithWhereWithoutFavoritedByInput | CovoiturageUpdateManyWithWhereWithoutFavoritedByInput[]
    deleteMany?: CovoiturageScalarWhereInput | CovoiturageScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutPassagerNestedInput = {
    create?: XOR<ApplicationCreateWithoutPassagerInput, ApplicationUncheckedCreateWithoutPassagerInput> | ApplicationCreateWithoutPassagerInput[] | ApplicationUncheckedCreateWithoutPassagerInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutPassagerInput | ApplicationCreateOrConnectWithoutPassagerInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutPassagerInput | ApplicationUpsertWithWhereUniqueWithoutPassagerInput[]
    createMany?: ApplicationCreateManyPassagerInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutPassagerInput | ApplicationUpdateWithWhereUniqueWithoutPassagerInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutPassagerInput | ApplicationUpdateManyWithWhereWithoutPassagerInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type LeaseUncheckedUpdateManyWithoutPassagerNestedInput = {
    create?: XOR<LeaseCreateWithoutPassagerInput, LeaseUncheckedCreateWithoutPassagerInput> | LeaseCreateWithoutPassagerInput[] | LeaseUncheckedCreateWithoutPassagerInput[]
    connectOrCreate?: LeaseCreateOrConnectWithoutPassagerInput | LeaseCreateOrConnectWithoutPassagerInput[]
    upsert?: LeaseUpsertWithWhereUniqueWithoutPassagerInput | LeaseUpsertWithWhereUniqueWithoutPassagerInput[]
    createMany?: LeaseCreateManyPassagerInputEnvelope
    set?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    disconnect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    delete?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    connect?: LeaseWhereUniqueInput | LeaseWhereUniqueInput[]
    update?: LeaseUpdateWithWhereUniqueWithoutPassagerInput | LeaseUpdateWithWhereUniqueWithoutPassagerInput[]
    updateMany?: LeaseUpdateManyWithWhereWithoutPassagerInput | LeaseUpdateManyWithWhereWithoutPassagerInput[]
    deleteMany?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
  }

  export type CovoiturageUpdateManyWithoutLocationNestedInput = {
    create?: XOR<CovoiturageCreateWithoutLocationInput, CovoiturageUncheckedCreateWithoutLocationInput> | CovoiturageCreateWithoutLocationInput[] | CovoiturageUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: CovoiturageCreateOrConnectWithoutLocationInput | CovoiturageCreateOrConnectWithoutLocationInput[]
    upsert?: CovoiturageUpsertWithWhereUniqueWithoutLocationInput | CovoiturageUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: CovoiturageCreateManyLocationInputEnvelope
    set?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    disconnect?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    delete?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    connect?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    update?: CovoiturageUpdateWithWhereUniqueWithoutLocationInput | CovoiturageUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: CovoiturageUpdateManyWithWhereWithoutLocationInput | CovoiturageUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: CovoiturageScalarWhereInput | CovoiturageScalarWhereInput[]
  }

  export type CovoiturageUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<CovoiturageCreateWithoutLocationInput, CovoiturageUncheckedCreateWithoutLocationInput> | CovoiturageCreateWithoutLocationInput[] | CovoiturageUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: CovoiturageCreateOrConnectWithoutLocationInput | CovoiturageCreateOrConnectWithoutLocationInput[]
    upsert?: CovoiturageUpsertWithWhereUniqueWithoutLocationInput | CovoiturageUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: CovoiturageCreateManyLocationInputEnvelope
    set?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    disconnect?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    delete?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    connect?: CovoiturageWhereUniqueInput | CovoiturageWhereUniqueInput[]
    update?: CovoiturageUpdateWithWhereUniqueWithoutLocationInput | CovoiturageUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: CovoiturageUpdateManyWithWhereWithoutLocationInput | CovoiturageUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: CovoiturageScalarWhereInput | CovoiturageScalarWhereInput[]
  }

  export type CovoiturageCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<CovoiturageCreateWithoutApplicationsInput, CovoiturageUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: CovoiturageCreateOrConnectWithoutApplicationsInput
    connect?: CovoiturageWhereUniqueInput
  }

  export type PassagerCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<PassagerCreateWithoutApplicationsInput, PassagerUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: PassagerCreateOrConnectWithoutApplicationsInput
    connect?: PassagerWhereUniqueInput
  }

  export type LeaseCreateNestedOneWithoutApplicationInput = {
    create?: XOR<LeaseCreateWithoutApplicationInput, LeaseUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: LeaseCreateOrConnectWithoutApplicationInput
    connect?: LeaseWhereUniqueInput
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CovoiturageUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<CovoiturageCreateWithoutApplicationsInput, CovoiturageUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: CovoiturageCreateOrConnectWithoutApplicationsInput
    upsert?: CovoiturageUpsertWithoutApplicationsInput
    connect?: CovoiturageWhereUniqueInput
    update?: XOR<XOR<CovoiturageUpdateToOneWithWhereWithoutApplicationsInput, CovoiturageUpdateWithoutApplicationsInput>, CovoiturageUncheckedUpdateWithoutApplicationsInput>
  }

  export type PassagerUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<PassagerCreateWithoutApplicationsInput, PassagerUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: PassagerCreateOrConnectWithoutApplicationsInput
    upsert?: PassagerUpsertWithoutApplicationsInput
    connect?: PassagerWhereUniqueInput
    update?: XOR<XOR<PassagerUpdateToOneWithWhereWithoutApplicationsInput, PassagerUpdateWithoutApplicationsInput>, PassagerUncheckedUpdateWithoutApplicationsInput>
  }

  export type LeaseUpdateOneWithoutApplicationNestedInput = {
    create?: XOR<LeaseCreateWithoutApplicationInput, LeaseUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: LeaseCreateOrConnectWithoutApplicationInput
    upsert?: LeaseUpsertWithoutApplicationInput
    disconnect?: LeaseWhereInput | boolean
    delete?: LeaseWhereInput | boolean
    connect?: LeaseWhereUniqueInput
    update?: XOR<XOR<LeaseUpdateToOneWithWhereWithoutApplicationInput, LeaseUpdateWithoutApplicationInput>, LeaseUncheckedUpdateWithoutApplicationInput>
  }

  export type CovoiturageCreateNestedOneWithoutLeasesInput = {
    create?: XOR<CovoiturageCreateWithoutLeasesInput, CovoiturageUncheckedCreateWithoutLeasesInput>
    connectOrCreate?: CovoiturageCreateOrConnectWithoutLeasesInput
    connect?: CovoiturageWhereUniqueInput
  }

  export type PassagerCreateNestedOneWithoutLeasesInput = {
    create?: XOR<PassagerCreateWithoutLeasesInput, PassagerUncheckedCreateWithoutLeasesInput>
    connectOrCreate?: PassagerCreateOrConnectWithoutLeasesInput
    connect?: PassagerWhereUniqueInput
  }

  export type ApplicationCreateNestedOneWithoutLeaseInput = {
    create?: XOR<ApplicationCreateWithoutLeaseInput, ApplicationUncheckedCreateWithoutLeaseInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutLeaseInput
    connect?: ApplicationWhereUniqueInput
  }

  export type PaymentCreateNestedManyWithoutLeaseInput = {
    create?: XOR<PaymentCreateWithoutLeaseInput, PaymentUncheckedCreateWithoutLeaseInput> | PaymentCreateWithoutLeaseInput[] | PaymentUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutLeaseInput | PaymentCreateOrConnectWithoutLeaseInput[]
    createMany?: PaymentCreateManyLeaseInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedOneWithoutLeaseInput = {
    create?: XOR<ApplicationCreateWithoutLeaseInput, ApplicationUncheckedCreateWithoutLeaseInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutLeaseInput
    connect?: ApplicationWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedManyWithoutLeaseInput = {
    create?: XOR<PaymentCreateWithoutLeaseInput, PaymentUncheckedCreateWithoutLeaseInput> | PaymentCreateWithoutLeaseInput[] | PaymentUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutLeaseInput | PaymentCreateOrConnectWithoutLeaseInput[]
    createMany?: PaymentCreateManyLeaseInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type CovoiturageUpdateOneRequiredWithoutLeasesNestedInput = {
    create?: XOR<CovoiturageCreateWithoutLeasesInput, CovoiturageUncheckedCreateWithoutLeasesInput>
    connectOrCreate?: CovoiturageCreateOrConnectWithoutLeasesInput
    upsert?: CovoiturageUpsertWithoutLeasesInput
    connect?: CovoiturageWhereUniqueInput
    update?: XOR<XOR<CovoiturageUpdateToOneWithWhereWithoutLeasesInput, CovoiturageUpdateWithoutLeasesInput>, CovoiturageUncheckedUpdateWithoutLeasesInput>
  }

  export type PassagerUpdateOneRequiredWithoutLeasesNestedInput = {
    create?: XOR<PassagerCreateWithoutLeasesInput, PassagerUncheckedCreateWithoutLeasesInput>
    connectOrCreate?: PassagerCreateOrConnectWithoutLeasesInput
    upsert?: PassagerUpsertWithoutLeasesInput
    connect?: PassagerWhereUniqueInput
    update?: XOR<XOR<PassagerUpdateToOneWithWhereWithoutLeasesInput, PassagerUpdateWithoutLeasesInput>, PassagerUncheckedUpdateWithoutLeasesInput>
  }

  export type ApplicationUpdateOneWithoutLeaseNestedInput = {
    create?: XOR<ApplicationCreateWithoutLeaseInput, ApplicationUncheckedCreateWithoutLeaseInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutLeaseInput
    upsert?: ApplicationUpsertWithoutLeaseInput
    disconnect?: ApplicationWhereInput | boolean
    delete?: ApplicationWhereInput | boolean
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutLeaseInput, ApplicationUpdateWithoutLeaseInput>, ApplicationUncheckedUpdateWithoutLeaseInput>
  }

  export type PaymentUpdateManyWithoutLeaseNestedInput = {
    create?: XOR<PaymentCreateWithoutLeaseInput, PaymentUncheckedCreateWithoutLeaseInput> | PaymentCreateWithoutLeaseInput[] | PaymentUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutLeaseInput | PaymentCreateOrConnectWithoutLeaseInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutLeaseInput | PaymentUpsertWithWhereUniqueWithoutLeaseInput[]
    createMany?: PaymentCreateManyLeaseInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutLeaseInput | PaymentUpdateWithWhereUniqueWithoutLeaseInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutLeaseInput | PaymentUpdateManyWithWhereWithoutLeaseInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateOneWithoutLeaseNestedInput = {
    create?: XOR<ApplicationCreateWithoutLeaseInput, ApplicationUncheckedCreateWithoutLeaseInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutLeaseInput
    upsert?: ApplicationUpsertWithoutLeaseInput
    disconnect?: ApplicationWhereInput | boolean
    delete?: ApplicationWhereInput | boolean
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutLeaseInput, ApplicationUpdateWithoutLeaseInput>, ApplicationUncheckedUpdateWithoutLeaseInput>
  }

  export type PaymentUncheckedUpdateManyWithoutLeaseNestedInput = {
    create?: XOR<PaymentCreateWithoutLeaseInput, PaymentUncheckedCreateWithoutLeaseInput> | PaymentCreateWithoutLeaseInput[] | PaymentUncheckedCreateWithoutLeaseInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutLeaseInput | PaymentCreateOrConnectWithoutLeaseInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutLeaseInput | PaymentUpsertWithWhereUniqueWithoutLeaseInput[]
    createMany?: PaymentCreateManyLeaseInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutLeaseInput | PaymentUpdateWithWhereUniqueWithoutLeaseInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutLeaseInput | PaymentUpdateManyWithWhereWithoutLeaseInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type LeaseCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<LeaseCreateWithoutPaymentsInput, LeaseUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: LeaseCreateOrConnectWithoutPaymentsInput
    connect?: LeaseWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type LeaseUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<LeaseCreateWithoutPaymentsInput, LeaseUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: LeaseCreateOrConnectWithoutPaymentsInput
    upsert?: LeaseUpsertWithoutPaymentsInput
    connect?: LeaseWhereUniqueInput
    update?: XOR<XOR<LeaseUpdateToOneWithWhereWithoutPaymentsInput, LeaseUpdateWithoutPaymentsInput>, LeaseUncheckedUpdateWithoutPaymentsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumCarTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CarType | EnumCarTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCarTypeFilter<$PrismaModel> | $Enums.CarType
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumCarTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CarType | EnumCarTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CarType[] | ListEnumCarTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCarTypeWithAggregatesFilter<$PrismaModel> | $Enums.CarType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCarTypeFilter<$PrismaModel>
    _max?: NestedEnumCarTypeFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
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

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
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

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
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

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type ConducteurCreateWithoutConducteurCovoituragesInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
  }

  export type ConducteurUncheckedCreateWithoutConducteurCovoituragesInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
  }

  export type ConducteurCreateOrConnectWithoutConducteurCovoituragesInput = {
    where: ConducteurWhereUniqueInput
    create: XOR<ConducteurCreateWithoutConducteurCovoituragesInput, ConducteurUncheckedCreateWithoutConducteurCovoituragesInput>
  }

  export type LeaseCreateWithoutCovoiturageInput = {
    startDate: Date | string
    endDate: Date | string
    passager: PassagerCreateNestedOneWithoutLeasesInput
    application?: ApplicationCreateNestedOneWithoutLeaseInput
    payments?: PaymentCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateWithoutCovoiturageInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    passagerCognitoId: string
    application?: ApplicationUncheckedCreateNestedOneWithoutLeaseInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseCreateOrConnectWithoutCovoiturageInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutCovoiturageInput, LeaseUncheckedCreateWithoutCovoiturageInput>
  }

  export type LeaseCreateManyCovoiturageInputEnvelope = {
    data: LeaseCreateManyCovoiturageInput | LeaseCreateManyCovoiturageInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutCovoiturageInput = {
    applicationDate: Date | string
    status: $Enums.ApplicationStatus
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    passager: PassagerCreateNestedOneWithoutApplicationsInput
    lease?: LeaseCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutCovoiturageInput = {
    id?: number
    applicationDate: Date | string
    status: $Enums.ApplicationStatus
    passagerCognitoId: string
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    leaseId?: number | null
  }

  export type ApplicationCreateOrConnectWithoutCovoiturageInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutCovoiturageInput, ApplicationUncheckedCreateWithoutCovoiturageInput>
  }

  export type ApplicationCreateManyCovoiturageInputEnvelope = {
    data: ApplicationCreateManyCovoiturageInput | ApplicationCreateManyCovoiturageInput[]
    skipDuplicates?: boolean
  }

  export type PassagerCreateWithoutFavoritesInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    covoiturages?: CovoiturageCreateNestedManyWithoutPassagersInput
    applications?: ApplicationCreateNestedManyWithoutPassagerInput
    leases?: LeaseCreateNestedManyWithoutPassagerInput
  }

  export type PassagerUncheckedCreateWithoutFavoritesInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    covoiturages?: CovoiturageUncheckedCreateNestedManyWithoutPassagersInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutPassagerInput
    leases?: LeaseUncheckedCreateNestedManyWithoutPassagerInput
  }

  export type PassagerCreateOrConnectWithoutFavoritesInput = {
    where: PassagerWhereUniqueInput
    create: XOR<PassagerCreateWithoutFavoritesInput, PassagerUncheckedCreateWithoutFavoritesInput>
  }

  export type PassagerCreateWithoutCovoituragesInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    favorites?: CovoiturageCreateNestedManyWithoutFavoritedByInput
    applications?: ApplicationCreateNestedManyWithoutPassagerInput
    leases?: LeaseCreateNestedManyWithoutPassagerInput
  }

  export type PassagerUncheckedCreateWithoutCovoituragesInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    favorites?: CovoiturageUncheckedCreateNestedManyWithoutFavoritedByInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutPassagerInput
    leases?: LeaseUncheckedCreateNestedManyWithoutPassagerInput
  }

  export type PassagerCreateOrConnectWithoutCovoituragesInput = {
    where: PassagerWhereUniqueInput
    create: XOR<PassagerCreateWithoutCovoituragesInput, PassagerUncheckedCreateWithoutCovoituragesInput>
  }

  export type LocationUpdateToOneWithWhereWithoutCovoituragesInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutCovoituragesInput, LocationUncheckedUpdateWithoutCovoituragesInput>
  }

  export type LocationUpdateWithoutCovoituragesInput = {
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type LocationUncheckedUpdateWithoutCovoituragesInput = {
    id?: IntFieldUpdateOperationsInput | number
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
  }

  export type ConducteurUpsertWithoutConducteurCovoituragesInput = {
    update: XOR<ConducteurUpdateWithoutConducteurCovoituragesInput, ConducteurUncheckedUpdateWithoutConducteurCovoituragesInput>
    create: XOR<ConducteurCreateWithoutConducteurCovoituragesInput, ConducteurUncheckedCreateWithoutConducteurCovoituragesInput>
    where?: ConducteurWhereInput
  }

  export type ConducteurUpdateToOneWithWhereWithoutConducteurCovoituragesInput = {
    where?: ConducteurWhereInput
    data: XOR<ConducteurUpdateWithoutConducteurCovoituragesInput, ConducteurUncheckedUpdateWithoutConducteurCovoituragesInput>
  }

  export type ConducteurUpdateWithoutConducteurCovoituragesInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type ConducteurUncheckedUpdateWithoutConducteurCovoituragesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type LeaseUpsertWithWhereUniqueWithoutCovoiturageInput = {
    where: LeaseWhereUniqueInput
    update: XOR<LeaseUpdateWithoutCovoiturageInput, LeaseUncheckedUpdateWithoutCovoiturageInput>
    create: XOR<LeaseCreateWithoutCovoiturageInput, LeaseUncheckedCreateWithoutCovoiturageInput>
  }

  export type LeaseUpdateWithWhereUniqueWithoutCovoiturageInput = {
    where: LeaseWhereUniqueInput
    data: XOR<LeaseUpdateWithoutCovoiturageInput, LeaseUncheckedUpdateWithoutCovoiturageInput>
  }

  export type LeaseUpdateManyWithWhereWithoutCovoiturageInput = {
    where: LeaseScalarWhereInput
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyWithoutCovoiturageInput>
  }

  export type LeaseScalarWhereInput = {
    AND?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
    OR?: LeaseScalarWhereInput[]
    NOT?: LeaseScalarWhereInput | LeaseScalarWhereInput[]
    id?: IntFilter<"Lease"> | number
    startDate?: DateTimeFilter<"Lease"> | Date | string
    endDate?: DateTimeFilter<"Lease"> | Date | string
    covoiturageId?: IntFilter<"Lease"> | number
    passagerCognitoId?: StringFilter<"Lease"> | string
  }

  export type ApplicationUpsertWithWhereUniqueWithoutCovoiturageInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutCovoiturageInput, ApplicationUncheckedUpdateWithoutCovoiturageInput>
    create: XOR<ApplicationCreateWithoutCovoiturageInput, ApplicationUncheckedCreateWithoutCovoiturageInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutCovoiturageInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutCovoiturageInput, ApplicationUncheckedUpdateWithoutCovoiturageInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutCovoiturageInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutCovoiturageInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    id?: IntFilter<"Application"> | number
    applicationDate?: DateTimeFilter<"Application"> | Date | string
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    covoiturageId?: IntFilter<"Application"> | number
    passagerCognitoId?: StringFilter<"Application"> | string
    name?: StringFilter<"Application"> | string
    email?: StringFilter<"Application"> | string
    phoneNumber?: StringFilter<"Application"> | string
    message?: StringNullableFilter<"Application"> | string | null
    leaseId?: IntNullableFilter<"Application"> | number | null
  }

  export type PassagerUpsertWithWhereUniqueWithoutFavoritesInput = {
    where: PassagerWhereUniqueInput
    update: XOR<PassagerUpdateWithoutFavoritesInput, PassagerUncheckedUpdateWithoutFavoritesInput>
    create: XOR<PassagerCreateWithoutFavoritesInput, PassagerUncheckedCreateWithoutFavoritesInput>
  }

  export type PassagerUpdateWithWhereUniqueWithoutFavoritesInput = {
    where: PassagerWhereUniqueInput
    data: XOR<PassagerUpdateWithoutFavoritesInput, PassagerUncheckedUpdateWithoutFavoritesInput>
  }

  export type PassagerUpdateManyWithWhereWithoutFavoritesInput = {
    where: PassagerScalarWhereInput
    data: XOR<PassagerUpdateManyMutationInput, PassagerUncheckedUpdateManyWithoutFavoritesInput>
  }

  export type PassagerScalarWhereInput = {
    AND?: PassagerScalarWhereInput | PassagerScalarWhereInput[]
    OR?: PassagerScalarWhereInput[]
    NOT?: PassagerScalarWhereInput | PassagerScalarWhereInput[]
    id?: IntFilter<"Passager"> | number
    cognitoId?: StringFilter<"Passager"> | string
    name?: StringFilter<"Passager"> | string
    email?: StringFilter<"Passager"> | string
    phoneNumber?: StringFilter<"Passager"> | string
  }

  export type PassagerUpsertWithWhereUniqueWithoutCovoituragesInput = {
    where: PassagerWhereUniqueInput
    update: XOR<PassagerUpdateWithoutCovoituragesInput, PassagerUncheckedUpdateWithoutCovoituragesInput>
    create: XOR<PassagerCreateWithoutCovoituragesInput, PassagerUncheckedCreateWithoutCovoituragesInput>
  }

  export type PassagerUpdateWithWhereUniqueWithoutCovoituragesInput = {
    where: PassagerWhereUniqueInput
    data: XOR<PassagerUpdateWithoutCovoituragesInput, PassagerUncheckedUpdateWithoutCovoituragesInput>
  }

  export type PassagerUpdateManyWithWhereWithoutCovoituragesInput = {
    where: PassagerScalarWhereInput
    data: XOR<PassagerUpdateManyMutationInput, PassagerUncheckedUpdateManyWithoutCovoituragesInput>
  }

  export type CovoiturageCreateWithoutConducteurInput = {
    name: string
    description: string
    photoUrls?: CovoiturageCreatephotoUrlsInput | string[]
    isPetsAllowed?: boolean
    carType: $Enums.CarType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    location: LocationCreateNestedOneWithoutCovoituragesInput
    leases?: LeaseCreateNestedManyWithoutCovoiturageInput
    applications?: ApplicationCreateNestedManyWithoutCovoiturageInput
    favoritedBy?: PassagerCreateNestedManyWithoutFavoritesInput
    passagers?: PassagerCreateNestedManyWithoutCovoituragesInput
  }

  export type CovoiturageUncheckedCreateWithoutConducteurInput = {
    id?: number
    name: string
    description: string
    photoUrls?: CovoiturageCreatephotoUrlsInput | string[]
    isPetsAllowed?: boolean
    carType: $Enums.CarType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    leases?: LeaseUncheckedCreateNestedManyWithoutCovoiturageInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCovoiturageInput
    favoritedBy?: PassagerUncheckedCreateNestedManyWithoutFavoritesInput
    passagers?: PassagerUncheckedCreateNestedManyWithoutCovoituragesInput
  }

  export type CovoiturageCreateOrConnectWithoutConducteurInput = {
    where: CovoiturageWhereUniqueInput
    create: XOR<CovoiturageCreateWithoutConducteurInput, CovoiturageUncheckedCreateWithoutConducteurInput>
  }

  export type CovoiturageCreateManyConducteurInputEnvelope = {
    data: CovoiturageCreateManyConducteurInput | CovoiturageCreateManyConducteurInput[]
    skipDuplicates?: boolean
  }

  export type CovoiturageUpsertWithWhereUniqueWithoutConducteurInput = {
    where: CovoiturageWhereUniqueInput
    update: XOR<CovoiturageUpdateWithoutConducteurInput, CovoiturageUncheckedUpdateWithoutConducteurInput>
    create: XOR<CovoiturageCreateWithoutConducteurInput, CovoiturageUncheckedCreateWithoutConducteurInput>
  }

  export type CovoiturageUpdateWithWhereUniqueWithoutConducteurInput = {
    where: CovoiturageWhereUniqueInput
    data: XOR<CovoiturageUpdateWithoutConducteurInput, CovoiturageUncheckedUpdateWithoutConducteurInput>
  }

  export type CovoiturageUpdateManyWithWhereWithoutConducteurInput = {
    where: CovoiturageScalarWhereInput
    data: XOR<CovoiturageUpdateManyMutationInput, CovoiturageUncheckedUpdateManyWithoutConducteurInput>
  }

  export type CovoiturageScalarWhereInput = {
    AND?: CovoiturageScalarWhereInput | CovoiturageScalarWhereInput[]
    OR?: CovoiturageScalarWhereInput[]
    NOT?: CovoiturageScalarWhereInput | CovoiturageScalarWhereInput[]
    id?: IntFilter<"Covoiturage"> | number
    name?: StringFilter<"Covoiturage"> | string
    description?: StringFilter<"Covoiturage"> | string
    photoUrls?: StringNullableListFilter<"Covoiturage">
    isPetsAllowed?: BoolFilter<"Covoiturage"> | boolean
    carType?: EnumCarTypeFilter<"Covoiturage"> | $Enums.CarType
    postedDate?: DateTimeFilter<"Covoiturage"> | Date | string
    averageRating?: FloatNullableFilter<"Covoiturage"> | number | null
    numberOfReviews?: IntNullableFilter<"Covoiturage"> | number | null
    locationId?: IntFilter<"Covoiturage"> | number
    conducteurCognitoId?: StringFilter<"Covoiturage"> | string
  }

  export type CovoiturageCreateWithoutPassagersInput = {
    name: string
    description: string
    photoUrls?: CovoiturageCreatephotoUrlsInput | string[]
    isPetsAllowed?: boolean
    carType: $Enums.CarType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    location: LocationCreateNestedOneWithoutCovoituragesInput
    conducteur: ConducteurCreateNestedOneWithoutConducteurCovoituragesInput
    leases?: LeaseCreateNestedManyWithoutCovoiturageInput
    applications?: ApplicationCreateNestedManyWithoutCovoiturageInput
    favoritedBy?: PassagerCreateNestedManyWithoutFavoritesInput
  }

  export type CovoiturageUncheckedCreateWithoutPassagersInput = {
    id?: number
    name: string
    description: string
    photoUrls?: CovoiturageCreatephotoUrlsInput | string[]
    isPetsAllowed?: boolean
    carType: $Enums.CarType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    conducteurCognitoId: string
    leases?: LeaseUncheckedCreateNestedManyWithoutCovoiturageInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCovoiturageInput
    favoritedBy?: PassagerUncheckedCreateNestedManyWithoutFavoritesInput
  }

  export type CovoiturageCreateOrConnectWithoutPassagersInput = {
    where: CovoiturageWhereUniqueInput
    create: XOR<CovoiturageCreateWithoutPassagersInput, CovoiturageUncheckedCreateWithoutPassagersInput>
  }

  export type CovoiturageCreateWithoutFavoritedByInput = {
    name: string
    description: string
    photoUrls?: CovoiturageCreatephotoUrlsInput | string[]
    isPetsAllowed?: boolean
    carType: $Enums.CarType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    location: LocationCreateNestedOneWithoutCovoituragesInput
    conducteur: ConducteurCreateNestedOneWithoutConducteurCovoituragesInput
    leases?: LeaseCreateNestedManyWithoutCovoiturageInput
    applications?: ApplicationCreateNestedManyWithoutCovoiturageInput
    passagers?: PassagerCreateNestedManyWithoutCovoituragesInput
  }

  export type CovoiturageUncheckedCreateWithoutFavoritedByInput = {
    id?: number
    name: string
    description: string
    photoUrls?: CovoiturageCreatephotoUrlsInput | string[]
    isPetsAllowed?: boolean
    carType: $Enums.CarType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    conducteurCognitoId: string
    leases?: LeaseUncheckedCreateNestedManyWithoutCovoiturageInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCovoiturageInput
    passagers?: PassagerUncheckedCreateNestedManyWithoutCovoituragesInput
  }

  export type CovoiturageCreateOrConnectWithoutFavoritedByInput = {
    where: CovoiturageWhereUniqueInput
    create: XOR<CovoiturageCreateWithoutFavoritedByInput, CovoiturageUncheckedCreateWithoutFavoritedByInput>
  }

  export type ApplicationCreateWithoutPassagerInput = {
    applicationDate: Date | string
    status: $Enums.ApplicationStatus
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    covoiturage: CovoiturageCreateNestedOneWithoutApplicationsInput
    lease?: LeaseCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutPassagerInput = {
    id?: number
    applicationDate: Date | string
    status: $Enums.ApplicationStatus
    covoiturageId: number
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    leaseId?: number | null
  }

  export type ApplicationCreateOrConnectWithoutPassagerInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutPassagerInput, ApplicationUncheckedCreateWithoutPassagerInput>
  }

  export type ApplicationCreateManyPassagerInputEnvelope = {
    data: ApplicationCreateManyPassagerInput | ApplicationCreateManyPassagerInput[]
    skipDuplicates?: boolean
  }

  export type LeaseCreateWithoutPassagerInput = {
    startDate: Date | string
    endDate: Date | string
    covoiturage: CovoiturageCreateNestedOneWithoutLeasesInput
    application?: ApplicationCreateNestedOneWithoutLeaseInput
    payments?: PaymentCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateWithoutPassagerInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    covoiturageId: number
    application?: ApplicationUncheckedCreateNestedOneWithoutLeaseInput
    payments?: PaymentUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseCreateOrConnectWithoutPassagerInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutPassagerInput, LeaseUncheckedCreateWithoutPassagerInput>
  }

  export type LeaseCreateManyPassagerInputEnvelope = {
    data: LeaseCreateManyPassagerInput | LeaseCreateManyPassagerInput[]
    skipDuplicates?: boolean
  }

  export type CovoiturageUpsertWithWhereUniqueWithoutPassagersInput = {
    where: CovoiturageWhereUniqueInput
    update: XOR<CovoiturageUpdateWithoutPassagersInput, CovoiturageUncheckedUpdateWithoutPassagersInput>
    create: XOR<CovoiturageCreateWithoutPassagersInput, CovoiturageUncheckedCreateWithoutPassagersInput>
  }

  export type CovoiturageUpdateWithWhereUniqueWithoutPassagersInput = {
    where: CovoiturageWhereUniqueInput
    data: XOR<CovoiturageUpdateWithoutPassagersInput, CovoiturageUncheckedUpdateWithoutPassagersInput>
  }

  export type CovoiturageUpdateManyWithWhereWithoutPassagersInput = {
    where: CovoiturageScalarWhereInput
    data: XOR<CovoiturageUpdateManyMutationInput, CovoiturageUncheckedUpdateManyWithoutPassagersInput>
  }

  export type CovoiturageUpsertWithWhereUniqueWithoutFavoritedByInput = {
    where: CovoiturageWhereUniqueInput
    update: XOR<CovoiturageUpdateWithoutFavoritedByInput, CovoiturageUncheckedUpdateWithoutFavoritedByInput>
    create: XOR<CovoiturageCreateWithoutFavoritedByInput, CovoiturageUncheckedCreateWithoutFavoritedByInput>
  }

  export type CovoiturageUpdateWithWhereUniqueWithoutFavoritedByInput = {
    where: CovoiturageWhereUniqueInput
    data: XOR<CovoiturageUpdateWithoutFavoritedByInput, CovoiturageUncheckedUpdateWithoutFavoritedByInput>
  }

  export type CovoiturageUpdateManyWithWhereWithoutFavoritedByInput = {
    where: CovoiturageScalarWhereInput
    data: XOR<CovoiturageUpdateManyMutationInput, CovoiturageUncheckedUpdateManyWithoutFavoritedByInput>
  }

  export type ApplicationUpsertWithWhereUniqueWithoutPassagerInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutPassagerInput, ApplicationUncheckedUpdateWithoutPassagerInput>
    create: XOR<ApplicationCreateWithoutPassagerInput, ApplicationUncheckedCreateWithoutPassagerInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutPassagerInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutPassagerInput, ApplicationUncheckedUpdateWithoutPassagerInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutPassagerInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutPassagerInput>
  }

  export type LeaseUpsertWithWhereUniqueWithoutPassagerInput = {
    where: LeaseWhereUniqueInput
    update: XOR<LeaseUpdateWithoutPassagerInput, LeaseUncheckedUpdateWithoutPassagerInput>
    create: XOR<LeaseCreateWithoutPassagerInput, LeaseUncheckedCreateWithoutPassagerInput>
  }

  export type LeaseUpdateWithWhereUniqueWithoutPassagerInput = {
    where: LeaseWhereUniqueInput
    data: XOR<LeaseUpdateWithoutPassagerInput, LeaseUncheckedUpdateWithoutPassagerInput>
  }

  export type LeaseUpdateManyWithWhereWithoutPassagerInput = {
    where: LeaseScalarWhereInput
    data: XOR<LeaseUpdateManyMutationInput, LeaseUncheckedUpdateManyWithoutPassagerInput>
  }

  export type CovoiturageCreateWithoutLocationInput = {
    name: string
    description: string
    photoUrls?: CovoiturageCreatephotoUrlsInput | string[]
    isPetsAllowed?: boolean
    carType: $Enums.CarType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    conducteur: ConducteurCreateNestedOneWithoutConducteurCovoituragesInput
    leases?: LeaseCreateNestedManyWithoutCovoiturageInput
    applications?: ApplicationCreateNestedManyWithoutCovoiturageInput
    favoritedBy?: PassagerCreateNestedManyWithoutFavoritesInput
    passagers?: PassagerCreateNestedManyWithoutCovoituragesInput
  }

  export type CovoiturageUncheckedCreateWithoutLocationInput = {
    id?: number
    name: string
    description: string
    photoUrls?: CovoiturageCreatephotoUrlsInput | string[]
    isPetsAllowed?: boolean
    carType: $Enums.CarType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    conducteurCognitoId: string
    leases?: LeaseUncheckedCreateNestedManyWithoutCovoiturageInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutCovoiturageInput
    favoritedBy?: PassagerUncheckedCreateNestedManyWithoutFavoritesInput
    passagers?: PassagerUncheckedCreateNestedManyWithoutCovoituragesInput
  }

  export type CovoiturageCreateOrConnectWithoutLocationInput = {
    where: CovoiturageWhereUniqueInput
    create: XOR<CovoiturageCreateWithoutLocationInput, CovoiturageUncheckedCreateWithoutLocationInput>
  }

  export type CovoiturageUpsertWithWhereUniqueWithoutLocationInput = {
    where: CovoiturageWhereUniqueInput
    update: XOR<CovoiturageUpdateWithoutLocationInput, CovoiturageUncheckedUpdateWithoutLocationInput>
    create: XOR<CovoiturageCreateWithoutLocationInput, CovoiturageUncheckedCreateWithoutLocationInput>
  }

  export type CovoiturageCreateManyLocationInputEnvelope = {
    data: CovoiturageCreateManyLocationInput | CovoiturageCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type CovoiturageUpdateWithWhereUniqueWithoutLocationInput = {
    where: CovoiturageWhereUniqueInput
    data: XOR<CovoiturageUpdateWithoutLocationInput, CovoiturageUncheckedUpdateWithoutLocationInput>
  }

  export type CovoiturageUpdateManyWithWhereWithoutLocationInput = {
    where: CovoiturageScalarWhereInput
    data: XOR<CovoiturageUpdateManyMutationInput, CovoiturageUncheckedUpdateManyWithoutLocationInput>
  }

  export type CovoiturageCreateWithoutApplicationsInput = {
    name: string
    description: string
    photoUrls?: CovoiturageCreatephotoUrlsInput | string[]
    isPetsAllowed?: boolean
    carType: $Enums.CarType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    location: LocationCreateNestedOneWithoutCovoituragesInput
    conducteur: ConducteurCreateNestedOneWithoutConducteurCovoituragesInput
    leases?: LeaseCreateNestedManyWithoutCovoiturageInput
    favoritedBy?: PassagerCreateNestedManyWithoutFavoritesInput
    passagers?: PassagerCreateNestedManyWithoutCovoituragesInput
  }

  export type CovoiturageUncheckedCreateWithoutApplicationsInput = {
    id?: number
    name: string
    description: string
    photoUrls?: CovoiturageCreatephotoUrlsInput | string[]
    isPetsAllowed?: boolean
    carType: $Enums.CarType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    conducteurCognitoId: string
    leases?: LeaseUncheckedCreateNestedManyWithoutCovoiturageInput
    favoritedBy?: PassagerUncheckedCreateNestedManyWithoutFavoritesInput
    passagers?: PassagerUncheckedCreateNestedManyWithoutCovoituragesInput
  }

  export type CovoiturageCreateOrConnectWithoutApplicationsInput = {
    where: CovoiturageWhereUniqueInput
    create: XOR<CovoiturageCreateWithoutApplicationsInput, CovoiturageUncheckedCreateWithoutApplicationsInput>
  }

  export type PassagerCreateWithoutApplicationsInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    covoiturages?: CovoiturageCreateNestedManyWithoutPassagersInput
    favorites?: CovoiturageCreateNestedManyWithoutFavoritedByInput
    leases?: LeaseCreateNestedManyWithoutPassagerInput
  }

  export type PassagerUncheckedCreateWithoutApplicationsInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    covoiturages?: CovoiturageUncheckedCreateNestedManyWithoutPassagersInput
    favorites?: CovoiturageUncheckedCreateNestedManyWithoutFavoritedByInput
    leases?: LeaseUncheckedCreateNestedManyWithoutPassagerInput
  }

  export type PassagerCreateOrConnectWithoutApplicationsInput = {
    where: PassagerWhereUniqueInput
    create: XOR<PassagerCreateWithoutApplicationsInput, PassagerUncheckedCreateWithoutApplicationsInput>
  }

  export type LeaseCreateWithoutApplicationInput = {
    startDate: Date | string
    endDate: Date | string
    covoiturage: CovoiturageCreateNestedOneWithoutLeasesInput
    passager: PassagerCreateNestedOneWithoutLeasesInput
    payments?: PaymentCreateNestedManyWithoutLeaseInput
  }

  export type LeaseUncheckedCreateWithoutApplicationInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    covoiturageId: number
    passagerCognitoId: string
    payments?: PaymentUncheckedCreateNestedManyWithoutLeaseInput
  }

  export type LeaseCreateOrConnectWithoutApplicationInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutApplicationInput, LeaseUncheckedCreateWithoutApplicationInput>
  }

  export type CovoiturageUpsertWithoutApplicationsInput = {
    update: XOR<CovoiturageUpdateWithoutApplicationsInput, CovoiturageUncheckedUpdateWithoutApplicationsInput>
    create: XOR<CovoiturageCreateWithoutApplicationsInput, CovoiturageUncheckedCreateWithoutApplicationsInput>
    where?: CovoiturageWhereInput
  }

  export type CovoiturageUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: CovoiturageWhereInput
    data: XOR<CovoiturageUpdateWithoutApplicationsInput, CovoiturageUncheckedUpdateWithoutApplicationsInput>
  }

  export type CovoiturageUpdateWithoutApplicationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: CovoiturageUpdatephotoUrlsInput | string[]
    isPetsAllowed?: BoolFieldUpdateOperationsInput | boolean
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    location?: LocationUpdateOneRequiredWithoutCovoituragesNestedInput
    conducteur?: ConducteurUpdateOneRequiredWithoutConducteurCovoituragesNestedInput
    leases?: LeaseUpdateManyWithoutCovoiturageNestedInput
    favoritedBy?: PassagerUpdateManyWithoutFavoritesNestedInput
    passagers?: PassagerUpdateManyWithoutCovoituragesNestedInput
  }

  export type CovoiturageUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: CovoiturageUpdatephotoUrlsInput | string[]
    isPetsAllowed?: BoolFieldUpdateOperationsInput | boolean
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    conducteurCognitoId?: StringFieldUpdateOperationsInput | string
    leases?: LeaseUncheckedUpdateManyWithoutCovoiturageNestedInput
    favoritedBy?: PassagerUncheckedUpdateManyWithoutFavoritesNestedInput
    passagers?: PassagerUncheckedUpdateManyWithoutCovoituragesNestedInput
  }

  export type PassagerUpsertWithoutApplicationsInput = {
    update: XOR<PassagerUpdateWithoutApplicationsInput, PassagerUncheckedUpdateWithoutApplicationsInput>
    create: XOR<PassagerCreateWithoutApplicationsInput, PassagerUncheckedCreateWithoutApplicationsInput>
    where?: PassagerWhereInput
  }

  export type PassagerUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: PassagerWhereInput
    data: XOR<PassagerUpdateWithoutApplicationsInput, PassagerUncheckedUpdateWithoutApplicationsInput>
  }

  export type PassagerUpdateWithoutApplicationsInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    covoiturages?: CovoiturageUpdateManyWithoutPassagersNestedInput
    favorites?: CovoiturageUpdateManyWithoutFavoritedByNestedInput
    leases?: LeaseUpdateManyWithoutPassagerNestedInput
  }

  export type PassagerUncheckedUpdateWithoutApplicationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    covoiturages?: CovoiturageUncheckedUpdateManyWithoutPassagersNestedInput
    favorites?: CovoiturageUncheckedUpdateManyWithoutFavoritedByNestedInput
    leases?: LeaseUncheckedUpdateManyWithoutPassagerNestedInput
  }

  export type LeaseUpsertWithoutApplicationInput = {
    update: XOR<LeaseUpdateWithoutApplicationInput, LeaseUncheckedUpdateWithoutApplicationInput>
    create: XOR<LeaseCreateWithoutApplicationInput, LeaseUncheckedCreateWithoutApplicationInput>
    where?: LeaseWhereInput
  }

  export type LeaseUpdateToOneWithWhereWithoutApplicationInput = {
    where?: LeaseWhereInput
    data: XOR<LeaseUpdateWithoutApplicationInput, LeaseUncheckedUpdateWithoutApplicationInput>
  }

  export type LeaseUpdateWithoutApplicationInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    covoiturage?: CovoiturageUpdateOneRequiredWithoutLeasesNestedInput
    passager?: PassagerUpdateOneRequiredWithoutLeasesNestedInput
    payments?: PaymentUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutApplicationInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    covoiturageId?: IntFieldUpdateOperationsInput | number
    passagerCognitoId?: StringFieldUpdateOperationsInput | string
    payments?: PaymentUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type CovoiturageCreateWithoutLeasesInput = {
    name: string
    description: string
    photoUrls?: CovoiturageCreatephotoUrlsInput | string[]
    isPetsAllowed?: boolean
    carType: $Enums.CarType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    location: LocationCreateNestedOneWithoutCovoituragesInput
    conducteur: ConducteurCreateNestedOneWithoutConducteurCovoituragesInput
    applications?: ApplicationCreateNestedManyWithoutCovoiturageInput
    favoritedBy?: PassagerCreateNestedManyWithoutFavoritesInput
    passagers?: PassagerCreateNestedManyWithoutCovoituragesInput
  }

  export type CovoiturageUncheckedCreateWithoutLeasesInput = {
    id?: number
    name: string
    description: string
    photoUrls?: CovoiturageCreatephotoUrlsInput | string[]
    isPetsAllowed?: boolean
    carType: $Enums.CarType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
    conducteurCognitoId: string
    applications?: ApplicationUncheckedCreateNestedManyWithoutCovoiturageInput
    favoritedBy?: PassagerUncheckedCreateNestedManyWithoutFavoritesInput
    passagers?: PassagerUncheckedCreateNestedManyWithoutCovoituragesInput
  }

  export type CovoiturageCreateOrConnectWithoutLeasesInput = {
    where: CovoiturageWhereUniqueInput
    create: XOR<CovoiturageCreateWithoutLeasesInput, CovoiturageUncheckedCreateWithoutLeasesInput>
  }

  export type PassagerCreateWithoutLeasesInput = {
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    covoiturages?: CovoiturageCreateNestedManyWithoutPassagersInput
    favorites?: CovoiturageCreateNestedManyWithoutFavoritedByInput
    applications?: ApplicationCreateNestedManyWithoutPassagerInput
  }

  export type PassagerUncheckedCreateWithoutLeasesInput = {
    id?: number
    cognitoId: string
    name: string
    email: string
    phoneNumber: string
    covoiturages?: CovoiturageUncheckedCreateNestedManyWithoutPassagersInput
    favorites?: CovoiturageUncheckedCreateNestedManyWithoutFavoritedByInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutPassagerInput
  }

  export type PassagerCreateOrConnectWithoutLeasesInput = {
    where: PassagerWhereUniqueInput
    create: XOR<PassagerCreateWithoutLeasesInput, PassagerUncheckedCreateWithoutLeasesInput>
  }

  export type ApplicationCreateWithoutLeaseInput = {
    applicationDate: Date | string
    status: $Enums.ApplicationStatus
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    covoiturage: CovoiturageCreateNestedOneWithoutApplicationsInput
    passager: PassagerCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutLeaseInput = {
    id?: number
    applicationDate: Date | string
    status: $Enums.ApplicationStatus
    covoiturageId: number
    passagerCognitoId: string
    name: string
    email: string
    phoneNumber: string
    message?: string | null
  }

  export type ApplicationCreateOrConnectWithoutLeaseInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutLeaseInput, ApplicationUncheckedCreateWithoutLeaseInput>
  }

  export type PaymentCreateWithoutLeaseInput = {
    amountDue: number
    amountPaid: number
    dueDate: Date | string
    paymentDate: Date | string
    paymentStatus: $Enums.PaymentStatus
  }

  export type PaymentUncheckedCreateWithoutLeaseInput = {
    id?: number
    amountDue: number
    amountPaid: number
    dueDate: Date | string
    paymentDate: Date | string
    paymentStatus: $Enums.PaymentStatus
  }

  export type PaymentCreateOrConnectWithoutLeaseInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutLeaseInput, PaymentUncheckedCreateWithoutLeaseInput>
  }

  export type PaymentCreateManyLeaseInputEnvelope = {
    data: PaymentCreateManyLeaseInput | PaymentCreateManyLeaseInput[]
    skipDuplicates?: boolean
  }

  export type CovoiturageUpsertWithoutLeasesInput = {
    update: XOR<CovoiturageUpdateWithoutLeasesInput, CovoiturageUncheckedUpdateWithoutLeasesInput>
    create: XOR<CovoiturageCreateWithoutLeasesInput, CovoiturageUncheckedCreateWithoutLeasesInput>
    where?: CovoiturageWhereInput
  }

  export type CovoiturageUpdateToOneWithWhereWithoutLeasesInput = {
    where?: CovoiturageWhereInput
    data: XOR<CovoiturageUpdateWithoutLeasesInput, CovoiturageUncheckedUpdateWithoutLeasesInput>
  }

  export type CovoiturageUpdateWithoutLeasesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: CovoiturageUpdatephotoUrlsInput | string[]
    isPetsAllowed?: BoolFieldUpdateOperationsInput | boolean
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    location?: LocationUpdateOneRequiredWithoutCovoituragesNestedInput
    conducteur?: ConducteurUpdateOneRequiredWithoutConducteurCovoituragesNestedInput
    applications?: ApplicationUpdateManyWithoutCovoiturageNestedInput
    favoritedBy?: PassagerUpdateManyWithoutFavoritesNestedInput
    passagers?: PassagerUpdateManyWithoutCovoituragesNestedInput
  }

  export type CovoiturageUncheckedUpdateWithoutLeasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: CovoiturageUpdatephotoUrlsInput | string[]
    isPetsAllowed?: BoolFieldUpdateOperationsInput | boolean
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    conducteurCognitoId?: StringFieldUpdateOperationsInput | string
    applications?: ApplicationUncheckedUpdateManyWithoutCovoiturageNestedInput
    favoritedBy?: PassagerUncheckedUpdateManyWithoutFavoritesNestedInput
    passagers?: PassagerUncheckedUpdateManyWithoutCovoituragesNestedInput
  }

  export type PassagerUpsertWithoutLeasesInput = {
    update: XOR<PassagerUpdateWithoutLeasesInput, PassagerUncheckedUpdateWithoutLeasesInput>
    create: XOR<PassagerCreateWithoutLeasesInput, PassagerUncheckedCreateWithoutLeasesInput>
    where?: PassagerWhereInput
  }

  export type PassagerUpdateToOneWithWhereWithoutLeasesInput = {
    where?: PassagerWhereInput
    data: XOR<PassagerUpdateWithoutLeasesInput, PassagerUncheckedUpdateWithoutLeasesInput>
  }

  export type PassagerUpdateWithoutLeasesInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    covoiturages?: CovoiturageUpdateManyWithoutPassagersNestedInput
    favorites?: CovoiturageUpdateManyWithoutFavoritedByNestedInput
    applications?: ApplicationUpdateManyWithoutPassagerNestedInput
  }

  export type PassagerUncheckedUpdateWithoutLeasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    covoiturages?: CovoiturageUncheckedUpdateManyWithoutPassagersNestedInput
    favorites?: CovoiturageUncheckedUpdateManyWithoutFavoritedByNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutPassagerNestedInput
  }

  export type ApplicationUpsertWithoutLeaseInput = {
    update: XOR<ApplicationUpdateWithoutLeaseInput, ApplicationUncheckedUpdateWithoutLeaseInput>
    create: XOR<ApplicationCreateWithoutLeaseInput, ApplicationUncheckedCreateWithoutLeaseInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutLeaseInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutLeaseInput, ApplicationUncheckedUpdateWithoutLeaseInput>
  }

  export type ApplicationUpdateWithoutLeaseInput = {
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    covoiturage?: CovoiturageUpdateOneRequiredWithoutApplicationsNestedInput
    passager?: PassagerUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutLeaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    covoiturageId?: IntFieldUpdateOperationsInput | number
    passagerCognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUpsertWithWhereUniqueWithoutLeaseInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutLeaseInput, PaymentUncheckedUpdateWithoutLeaseInput>
    create: XOR<PaymentCreateWithoutLeaseInput, PaymentUncheckedCreateWithoutLeaseInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutLeaseInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutLeaseInput, PaymentUncheckedUpdateWithoutLeaseInput>
  }

  export type PaymentUpdateManyWithWhereWithoutLeaseInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutLeaseInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: IntFilter<"Payment"> | number
    amountDue?: FloatFilter<"Payment"> | number
    amountPaid?: FloatFilter<"Payment"> | number
    dueDate?: DateTimeFilter<"Payment"> | Date | string
    paymentDate?: DateTimeFilter<"Payment"> | Date | string
    paymentStatus?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    leaseId?: IntFilter<"Payment"> | number
  }

  export type LeaseCreateWithoutPaymentsInput = {
    startDate: Date | string
    endDate: Date | string
    covoiturage: CovoiturageCreateNestedOneWithoutLeasesInput
    passager: PassagerCreateNestedOneWithoutLeasesInput
    application?: ApplicationCreateNestedOneWithoutLeaseInput
  }

  export type LeaseUncheckedCreateWithoutPaymentsInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    covoiturageId: number
    passagerCognitoId: string
    application?: ApplicationUncheckedCreateNestedOneWithoutLeaseInput
  }

  export type LeaseCreateOrConnectWithoutPaymentsInput = {
    where: LeaseWhereUniqueInput
    create: XOR<LeaseCreateWithoutPaymentsInput, LeaseUncheckedCreateWithoutPaymentsInput>
  }

  export type LeaseUpsertWithoutPaymentsInput = {
    update: XOR<LeaseUpdateWithoutPaymentsInput, LeaseUncheckedUpdateWithoutPaymentsInput>
    create: XOR<LeaseCreateWithoutPaymentsInput, LeaseUncheckedCreateWithoutPaymentsInput>
    where?: LeaseWhereInput
  }

  export type LeaseUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: LeaseWhereInput
    data: XOR<LeaseUpdateWithoutPaymentsInput, LeaseUncheckedUpdateWithoutPaymentsInput>
  }

  export type LeaseUpdateWithoutPaymentsInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    covoiturage?: CovoiturageUpdateOneRequiredWithoutLeasesNestedInput
    passager?: PassagerUpdateOneRequiredWithoutLeasesNestedInput
    application?: ApplicationUpdateOneWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    covoiturageId?: IntFieldUpdateOperationsInput | number
    passagerCognitoId?: StringFieldUpdateOperationsInput | string
    application?: ApplicationUncheckedUpdateOneWithoutLeaseNestedInput
  }

  export type LeaseCreateManyCovoiturageInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    passagerCognitoId: string
  }

  export type ApplicationCreateManyCovoiturageInput = {
    id?: number
    applicationDate: Date | string
    status: $Enums.ApplicationStatus
    passagerCognitoId: string
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    leaseId?: number | null
  }

  export type LeaseUpdateWithoutCovoiturageInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    passager?: PassagerUpdateOneRequiredWithoutLeasesNestedInput
    application?: ApplicationUpdateOneWithoutLeaseNestedInput
    payments?: PaymentUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutCovoiturageInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    passagerCognitoId?: StringFieldUpdateOperationsInput | string
    application?: ApplicationUncheckedUpdateOneWithoutLeaseNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateManyWithoutCovoiturageInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    passagerCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationUpdateWithoutCovoiturageInput = {
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    passager?: PassagerUpdateOneRequiredWithoutApplicationsNestedInput
    lease?: LeaseUpdateOneWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutCovoiturageInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    passagerCognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    leaseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ApplicationUncheckedUpdateManyWithoutCovoiturageInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    passagerCognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    leaseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PassagerUpdateWithoutFavoritesInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    covoiturages?: CovoiturageUpdateManyWithoutPassagersNestedInput
    applications?: ApplicationUpdateManyWithoutPassagerNestedInput
    leases?: LeaseUpdateManyWithoutPassagerNestedInput
  }

  export type PassagerUncheckedUpdateWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    covoiturages?: CovoiturageUncheckedUpdateManyWithoutPassagersNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutPassagerNestedInput
    leases?: LeaseUncheckedUpdateManyWithoutPassagerNestedInput
  }

  export type PassagerUncheckedUpdateManyWithoutFavoritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type PassagerUpdateWithoutCovoituragesInput = {
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    favorites?: CovoiturageUpdateManyWithoutFavoritedByNestedInput
    applications?: ApplicationUpdateManyWithoutPassagerNestedInput
    leases?: LeaseUpdateManyWithoutPassagerNestedInput
  }

  export type PassagerUncheckedUpdateWithoutCovoituragesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    favorites?: CovoiturageUncheckedUpdateManyWithoutFavoritedByNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutPassagerNestedInput
    leases?: LeaseUncheckedUpdateManyWithoutPassagerNestedInput
  }

  export type PassagerUncheckedUpdateManyWithoutCovoituragesInput = {
    id?: IntFieldUpdateOperationsInput | number
    cognitoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
  }

  export type CovoiturageCreateManyConducteurInput = {
    id?: number
    name: string
    description: string
    photoUrls?: CovoiturageCreatephotoUrlsInput | string[]
    isPetsAllowed?: boolean
    carType: $Enums.CarType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    locationId: number
  }

  export type CovoiturageUpdateWithoutConducteurInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: CovoiturageUpdatephotoUrlsInput | string[]
    isPetsAllowed?: BoolFieldUpdateOperationsInput | boolean
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    location?: LocationUpdateOneRequiredWithoutCovoituragesNestedInput
    leases?: LeaseUpdateManyWithoutCovoiturageNestedInput
    applications?: ApplicationUpdateManyWithoutCovoiturageNestedInput
    favoritedBy?: PassagerUpdateManyWithoutFavoritesNestedInput
    passagers?: PassagerUpdateManyWithoutCovoituragesNestedInput
  }

  export type CovoiturageUncheckedUpdateWithoutConducteurInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: CovoiturageUpdatephotoUrlsInput | string[]
    isPetsAllowed?: BoolFieldUpdateOperationsInput | boolean
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    leases?: LeaseUncheckedUpdateManyWithoutCovoiturageNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCovoiturageNestedInput
    favoritedBy?: PassagerUncheckedUpdateManyWithoutFavoritesNestedInput
    passagers?: PassagerUncheckedUpdateManyWithoutCovoituragesNestedInput
  }

  export type CovoiturageUncheckedUpdateManyWithoutConducteurInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: CovoiturageUpdatephotoUrlsInput | string[]
    isPetsAllowed?: BoolFieldUpdateOperationsInput | boolean
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
  }

  export type ApplicationCreateManyPassagerInput = {
    id?: number
    applicationDate: Date | string
    status: $Enums.ApplicationStatus
    covoiturageId: number
    name: string
    email: string
    phoneNumber: string
    message?: string | null
    leaseId?: number | null
  }

  export type LeaseCreateManyPassagerInput = {
    id?: number
    startDate: Date | string
    endDate: Date | string
    covoiturageId: number
  }

  export type CovoiturageUpdateWithoutPassagersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: CovoiturageUpdatephotoUrlsInput | string[]
    isPetsAllowed?: BoolFieldUpdateOperationsInput | boolean
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    location?: LocationUpdateOneRequiredWithoutCovoituragesNestedInput
    conducteur?: ConducteurUpdateOneRequiredWithoutConducteurCovoituragesNestedInput
    leases?: LeaseUpdateManyWithoutCovoiturageNestedInput
    applications?: ApplicationUpdateManyWithoutCovoiturageNestedInput
    favoritedBy?: PassagerUpdateManyWithoutFavoritesNestedInput
  }

  export type CovoiturageUncheckedUpdateWithoutPassagersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: CovoiturageUpdatephotoUrlsInput | string[]
    isPetsAllowed?: BoolFieldUpdateOperationsInput | boolean
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    conducteurCognitoId?: StringFieldUpdateOperationsInput | string
    leases?: LeaseUncheckedUpdateManyWithoutCovoiturageNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCovoiturageNestedInput
    favoritedBy?: PassagerUncheckedUpdateManyWithoutFavoritesNestedInput
  }

  export type CovoiturageUncheckedUpdateManyWithoutPassagersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: CovoiturageUpdatephotoUrlsInput | string[]
    isPetsAllowed?: BoolFieldUpdateOperationsInput | boolean
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    conducteurCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type CovoiturageUpdateWithoutFavoritedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: CovoiturageUpdatephotoUrlsInput | string[]
    isPetsAllowed?: BoolFieldUpdateOperationsInput | boolean
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    location?: LocationUpdateOneRequiredWithoutCovoituragesNestedInput
    conducteur?: ConducteurUpdateOneRequiredWithoutConducteurCovoituragesNestedInput
    leases?: LeaseUpdateManyWithoutCovoiturageNestedInput
    applications?: ApplicationUpdateManyWithoutCovoiturageNestedInput
    passagers?: PassagerUpdateManyWithoutCovoituragesNestedInput
  }

  export type CovoiturageUncheckedUpdateWithoutFavoritedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: CovoiturageUpdatephotoUrlsInput | string[]
    isPetsAllowed?: BoolFieldUpdateOperationsInput | boolean
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    conducteurCognitoId?: StringFieldUpdateOperationsInput | string
    leases?: LeaseUncheckedUpdateManyWithoutCovoiturageNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCovoiturageNestedInput
    passagers?: PassagerUncheckedUpdateManyWithoutCovoituragesNestedInput
  }

  export type CovoiturageUncheckedUpdateManyWithoutFavoritedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: CovoiturageUpdatephotoUrlsInput | string[]
    isPetsAllowed?: BoolFieldUpdateOperationsInput | boolean
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    locationId?: IntFieldUpdateOperationsInput | number
    conducteurCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type ApplicationUpdateWithoutPassagerInput = {
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    covoiturage?: CovoiturageUpdateOneRequiredWithoutApplicationsNestedInput
    lease?: LeaseUpdateOneWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutPassagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    covoiturageId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    leaseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ApplicationUncheckedUpdateManyWithoutPassagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    covoiturageId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    leaseId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LeaseUpdateWithoutPassagerInput = {
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    covoiturage?: CovoiturageUpdateOneRequiredWithoutLeasesNestedInput
    application?: ApplicationUpdateOneWithoutLeaseNestedInput
    payments?: PaymentUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateWithoutPassagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    covoiturageId?: IntFieldUpdateOperationsInput | number
    application?: ApplicationUncheckedUpdateOneWithoutLeaseNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutLeaseNestedInput
  }

  export type LeaseUncheckedUpdateManyWithoutPassagerInput = {
    id?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    covoiturageId?: IntFieldUpdateOperationsInput | number
  }

  export type CovoiturageUpdateWithoutLocationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: CovoiturageUpdatephotoUrlsInput | string[]
    isPetsAllowed?: BoolFieldUpdateOperationsInput | boolean
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    conducteur?: ConducteurUpdateOneRequiredWithoutConducteurCovoituragesNestedInput
    leases?: LeaseUpdateManyWithoutCovoiturageNestedInput
    applications?: ApplicationUpdateManyWithoutCovoiturageNestedInput
    favoritedBy?: PassagerUpdateManyWithoutFavoritesNestedInput
    passagers?: PassagerUpdateManyWithoutCovoituragesNestedInput
  }

  export type CovoiturageUncheckedUpdateWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: CovoiturageUpdatephotoUrlsInput | string[]
    isPetsAllowed?: BoolFieldUpdateOperationsInput | boolean
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    conducteurCognitoId?: StringFieldUpdateOperationsInput | string
    leases?: LeaseUncheckedUpdateManyWithoutCovoiturageNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutCovoiturageNestedInput
    favoritedBy?: PassagerUncheckedUpdateManyWithoutFavoritesNestedInput
    passagers?: PassagerUncheckedUpdateManyWithoutCovoituragesNestedInput
  }

  export type CovoiturageCreateManyLocationInput = {
    id?: number
    name: string
    description: string
    photoUrls?: CovoiturageCreatephotoUrlsInput | string[]
    isPetsAllowed?: boolean
    carType: $Enums.CarType
    postedDate?: Date | string
    averageRating?: number | null
    numberOfReviews?: number | null
    conducteurCognitoId: string
  }

  export type CovoiturageUncheckedUpdateManyWithoutLocationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoUrls?: CovoiturageUpdatephotoUrlsInput | string[]
    isPetsAllowed?: BoolFieldUpdateOperationsInput | boolean
    carType?: EnumCarTypeFieldUpdateOperationsInput | $Enums.CarType
    postedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    averageRating?: NullableFloatFieldUpdateOperationsInput | number | null
    numberOfReviews?: NullableIntFieldUpdateOperationsInput | number | null
    conducteurCognitoId?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentCreateManyLeaseInput = {
    id?: number
    amountDue: number
    amountPaid: number
    dueDate: Date | string
    paymentDate: Date | string
    paymentStatus: $Enums.PaymentStatus
  }

  export type PaymentUpdateWithoutLeaseInput = {
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentUncheckedUpdateWithoutLeaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type PaymentUncheckedUpdateManyWithoutLeaseInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountDue?: FloatFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
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