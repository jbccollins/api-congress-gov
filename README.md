
# 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧
### This project is in very early development. Do not use in production.
# 🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧🚧

# api-congress-gov

A type-safe wrapper around api.congress.gov.

## Usage

```ts
const apiInstance = api(YOUR_api.congress.gov_API_KEY);

const bills = await apiInstance.bill.billListAll({
    offset: 0,
    limit: 20,
});
...
```

## Contribution

### Install Dependencies

```bash
npm i
```
### Test
```bash
npm run test
```

### Format
```bash
npm run format
```

### Build
```bash
npm run build
```

### Publish
```bash
npm publish
```