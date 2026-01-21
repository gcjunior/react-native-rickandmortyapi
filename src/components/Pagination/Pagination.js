import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { usePaginationRange } from '../../hooks/usePaginationRange';
import { styles } from './styles';
import TriangleLeft from '../TriangleLeft/TriangleLeft';
import TriangleRight from '../TriangleRight/TriangleRight';

const Pagination = ({
  data,
  RenderComponent,
  title = '',
  buttonConst,
  contentPerPage,
  siblingCount,
  currentPage,
  setCurrentPage,
  totalItems,
}) => {
  const totalPageCount = React.useMemo(
    () => Math.ceil(totalItems / contentPerPage),
    [totalItems, contentPerPage],
  );

  const paginationRange = usePaginationRange({
    totalPageCount,
    contentPerPage,
    buttonConst,
    siblingCount,
    currentPage,
  });

  function goToNextPage() {
    setCurrentPage(page => page + 1);
  }

  function gotToPreviousPage() {
    setCurrentPage(page => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  return (
    <View>
      {title && <Text>{title}</Text>}

      <RenderComponent data={data} currentPage={currentPage} />

      <View style={styles.pagination}>
        <TouchableOpacity
          onPress={gotToPreviousPage}
          disabled={currentPage === 1}
          style={[
            styles.pageItem,
            styles.navButton,
            currentPage === 1 && styles.disabledButton,
          ]}
        >
          <TriangleLeft size={18} color="#d42025" />
        </TouchableOpacity>
        {paginationRange.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={changePage}
              style={[
                styles.pageButton,
                currentPage === item && styles.activePageButton,
              ]}
            >
              <Text
                style={
                  item === currentPage ? styles.activePageText : styles.pageText
                }
              >
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity
          onPress={goToNextPage}
          disabled={currentPage === totalPageCount}
          style={[
            styles.pageItem,
            styles.navButton,
            currentPage === totalPageCount && styles.disabledButton,
          ]}
        >
          <TriangleRight size={18} color="#d42025" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pagination;
