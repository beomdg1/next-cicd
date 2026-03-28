type Params = {
  params: {
    slug: string;
  };
};

const sum = require('./sum')

test('adds 1 + 2 = 3', () => {
  console.log(expect(sum(1,2)).toBe(3))
})

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return <>
    <h1>Slug: {params.slug}</h1>;
    <p>BeoNgu</p>
  </>
}
