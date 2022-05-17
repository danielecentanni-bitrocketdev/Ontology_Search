export const filterSearch = (array, classe,property,individual,input) => array.filter((item) => item.label)
    .filter((item) => {
      if (classe)
        return item['@type'] && item['@type'][0].split('#').pop() === 'Class'
      else return item;
    })
    .filter((item) => {
      if (property)
        return (
          item['@type'] &&
          item['@type'][0].split('#').pop() === 'AnnotationProperty'
        );
      else return item;
    })
    .filter((item) => {
      if (individual)
        return (
          item['@type'] &&
          item['@type'][0].split('#').pop() === 'NamedIndividual'
        );
      else return item;
    })
    .filter((item) => {
      if (input === '') return item;
      else if (
        item.label[0]['@value']
          .toLowerCase()
          .includes(input.toLocaleLowerCase())
      )
        return item;
      else return null;
    })
