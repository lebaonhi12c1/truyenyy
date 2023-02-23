import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollToTopPageChange } from '../global_function';
import CardProductCategoryPage2 from './CardProductCategoryPage2';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// nếu muốn hiển thị 1 trang 5 sản phẩm theo từng trang hì lấy số sản phẩn nhân có số trang
// vd 12 sản phẩm mỗi trang 5 sản phẩm thì có 3 trang 1: 5  2: 10 3: 15
function CategoriesPage2(props) {
    useScrollToTopPageChange()
    const sibar_categories = [
        'Kim thánh bảng',
        'Truyện ra chương nhanh nhất',
        'Truyện ra chương truyện nhanh nhất',
        'Top truyện mới đăng',
        'Top truyện full',
        'Top truyện được đề cử',
        'Truyện nhiều Fan',
    ]
    const [acive_sibar, setacive_sibar] = useState(0)
    const [active_page, setactive_page] = useState(0)
    const [titleBanner, settitleBanner] = useState({
        image: 'https://yystatic.codeprime.net/desktop/img/tables/table-bg-14.jpg',
        title: 'Kim thánh bảng',
        sub: 'Bảng Xếp Hạng Truyện Chữ',
    })
    const order_demo_data = [
        {
            image: 'https://yymedia.codeprime.net/media/novels/202207/nuong-tu-nha-ta-khong-thich-hop-dich-ae356f1a8c.jpg',
            title: 'Đại Thánh Truyện (Bản dịch)',
            author: 'Thuyết Mộng Giả',
            chap: 1419,
            view: 124663,
            desc: 'Ở giữa lục đạo luân hồi có những kẻ vẫn còn giữ ký ức ở kiếp trước, một người một thú họ đã gặp nhau, đó là một cái duyên.Với thân phận khác ở kiếp này, Lý Thanh Sơn đã được Thanh ngưu chỉ dạy cho công pháp “Thần thông”, bước đầu đặt nền tảng để có thể tồn tại trong thế giới đầy rẫy yêu ma. Người thiếu niên có ý chí kiên định đó đã rời khỏi sơn thôn và bắt đầu tung hoành khắp nơi trong thiên hạ, từng bước từng bước đi vào trong truyền thuyết và trở thành một thần thoại.',
            profile: 'lockhoa',
            progress: '100/100',
            like_count: '1200',
            category: 'Đô Thị',
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202207/nuong-tu-nha-ta-khong-thich-hop-dich-ae356f1a8c.jpg',
            title: 'Đại Thánh Truyện (Bản dịch)',
            author: 'Thuyết Mộng Giả',
            chap: 1419,
            view: 124663,
            desc: 'Ở giữa lục đạo luân hồi có những kẻ vẫn còn giữ ký ức ở kiếp trước, một người một thú họ đã gặp nhau, đó là một cái duyên.Với thân phận khác ở kiếp này, Lý Thanh Sơn đã được Thanh ngưu chỉ dạy cho công pháp “Thần thông”, bước đầu đặt nền tảng để có thể tồn tại trong thế giới đầy rẫy yêu ma. Người thiếu niên có ý chí kiên định đó đã rời khỏi sơn thôn và bắt đầu tung hoành khắp nơi trong thiên hạ, từng bước từng bước đi vào trong truyền thuyết và trở thành một thần thoại.',
            profile: 'lockhoa',
            progress: '100/100',
            like_count: '1200',
            category: 'Đô Thị',
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202207/nuong-tu-nha-ta-khong-thich-hop-dich-ae356f1a8c.jpg',
            title: 'Đại Thánh Truyện (Bản dịch)',
            author: 'Thuyết Mộng Giả',
            chap: 1419,
            view: 124663,
            desc: 'Ở giữa lục đạo luân hồi có những kẻ vẫn còn giữ ký ức ở kiếp trước, một người một thú họ đã gặp nhau, đó là một cái duyên.Với thân phận khác ở kiếp này, Lý Thanh Sơn đã được Thanh ngưu chỉ dạy cho công pháp “Thần thông”, bước đầu đặt nền tảng để có thể tồn tại trong thế giới đầy rẫy yêu ma. Người thiếu niên có ý chí kiên định đó đã rời khỏi sơn thôn và bắt đầu tung hoành khắp nơi trong thiên hạ, từng bước từng bước đi vào trong truyền thuyết và trở thành một thần thoại.',
            profile: 'lockhoa',
            progress: '100/100',
            like_count: '1200',
            category: 'Đô Thị',
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202207/nuong-tu-nha-ta-khong-thich-hop-dich-ae356f1a8c.jpg',
            title: 'Đại Thánh Truyện (Bản dịch)',
            author: 'Thuyết Mộng Giả',
            chap: 1419,
            view: 124663,
            desc: 'Ở giữa lục đạo luân hồi có những kẻ vẫn còn giữ ký ức ở kiếp trước, một người một thú họ đã gặp nhau, đó là một cái duyên.Với thân phận khác ở kiếp này, Lý Thanh Sơn đã được Thanh ngưu chỉ dạy cho công pháp “Thần thông”, bước đầu đặt nền tảng để có thể tồn tại trong thế giới đầy rẫy yêu ma. Người thiếu niên có ý chí kiên định đó đã rời khỏi sơn thôn và bắt đầu tung hoành khắp nơi trong thiên hạ, từng bước từng bước đi vào trong truyền thuyết và trở thành một thần thoại.',
            profile: 'lockhoa',
            progress: '100/100',
            like_count: '1200',
            category: 'Đô Thị',
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202207/nuong-tu-nha-ta-khong-thich-hop-dich-ae356f1a8c.jpg',
            title: 'Đại Thánh Truyện (Bản dịch)',
            author: 'Thuyết Mộng Giả',
            chap: 1419,
            view: 124663,
            desc: 'Ở giữa lục đạo luân hồi có những kẻ vẫn còn giữ ký ức ở kiếp trước, một người một thú họ đã gặp nhau, đó là một cái duyên.Với thân phận khác ở kiếp này, Lý Thanh Sơn đã được Thanh ngưu chỉ dạy cho công pháp “Thần thông”, bước đầu đặt nền tảng để có thể tồn tại trong thế giới đầy rẫy yêu ma. Người thiếu niên có ý chí kiên định đó đã rời khỏi sơn thôn và bắt đầu tung hoành khắp nơi trong thiên hạ, từng bước từng bước đi vào trong truyền thuyết và trở thành một thần thoại.',
            profile: 'lockhoa',
            progress: '100/100',
            like_count: '1200',
            category: 'Đô Thị',
        },
    ]
    const [product_category_page2, setproduct_category_page2] = useState(order_demo_data)
    const order_demo_data2 = [
        {
            image: 'https://i.truyenvua.com/ebook/190x247/tokyorevengers_1548170283.jpg?gf=hdfgdfg&mobile=2',
            title: 'Đại Thánh Truyện (Bản dịch)',
            author: 'Thuyết Mộng Giả',
            chap: 1419,
            view: 124663,
            desc: 'Ở giữa lục đạo luân hồi có những kẻ vẫn còn giữ ký ức ở kiếp trước, một người một thú họ đã gặp nhau, đó là một cái duyên.Với thân phận khác ở kiếp này, Lý Thanh Sơn đã được Thanh ngưu chỉ dạy cho công pháp “Thần thông”, bước đầu đặt nền tảng để có thể tồn tại trong thế giới đầy rẫy yêu ma. Người thiếu niên có ý chí kiên định đó đã rời khỏi sơn thôn và bắt đầu tung hoành khắp nơi trong thiên hạ, từng bước từng bước đi vào trong truyền thuyết và trở thành một thần thoại.',
            profile: 'lockhoa',
            progress: '100/100',
            like_count: '1200',
            category: 'Đô Thị',
        },
        {
            image: 'https://i.truyenvua.com/ebook/190x247/tokyorevengers_1548170283.jpg?gf=hdfgdfg&mobile=2',
            title: 'Đại Thánh Truyện (Bản dịch)',
            author: 'Thuyết Mộng Giả',
            chap: 1419,
            view: 124663,
            desc: 'Ở giữa lục đạo luân hồi có những kẻ vẫn còn giữ ký ức ở kiếp trước, một người một thú họ đã gặp nhau, đó là một cái duyên.Với thân phận khác ở kiếp này, Lý Thanh Sơn đã được Thanh ngưu chỉ dạy cho công pháp “Thần thông”, bước đầu đặt nền tảng để có thể tồn tại trong thế giới đầy rẫy yêu ma. Người thiếu niên có ý chí kiên định đó đã rời khỏi sơn thôn và bắt đầu tung hoành khắp nơi trong thiên hạ, từng bước từng bước đi vào trong truyền thuyết và trở thành một thần thoại.',
            profile: 'lockhoa',
            progress: '100/100',
            like_count: '1200',
            category: 'Đô Thị',
                },
                {
                    image: 'https://i.truyenvua.com/ebook/190x247/tokyorevengers_1548170283.jpg?gf=hdfgdfg&mobile=2',
                    title: 'Đại Thánh Truyện (Bản dịch)',
                    author: 'Thuyết Mộng Giả',
                    chap: 1419,
                    view: 124663,
                    desc: 'Ở giữa lục đạo luân hồi có những kẻ vẫn còn giữ ký ức ở kiếp trước, một người một thú họ đã gặp nhau, đó là một cái duyên.Với thân phận khác ở kiếp này, Lý Thanh Sơn đã được Thanh ngưu chỉ dạy cho công pháp “Thần thông”, bước đầu đặt nền tảng để có thể tồn tại trong thế giới đầy rẫy yêu ma. Người thiếu niên có ý chí kiên định đó đã rời khỏi sơn thôn và bắt đầu tung hoành khắp nơi trong thiên hạ, từng bước từng bước đi vào trong truyền thuyết và trở thành một thần thoại.',
                    profile: 'lockhoa',
                    progress: '100/100',
                    like_count: '1200',
                    category: 'Đô Thị',
                        },
    ]
    const [productPage, setproductPage] = useState([])
    const handleSetData = function(e,index){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        setacive_sibar(index)
        settitleBanner({
            ...titleBanner,
            title: e.target.innerText,
        })
        setproduct_category_page2(index ===3 ?order_demo_data2: order_demo_data)
        setactive_page(0)
    }
    const getPaginationLenght = function(list,count_item_in_page){
        const array = []
        const length =  Math.ceil(list.length/count_item_in_page)
        for (let index = 0; index <length; index++) {
            array.push(index)
        }
        return {array,length}
    }
    const handdleActivePage  = function(index){
        setactive_page(index)
    }
    const handleControlPageNumber = function(type){
        switch (type) {
            case 1:
                active_page <getPaginationLenght(product_category_page2,2).length -1 && setactive_page(pre => pre + 1)
                break;
            case 0:
                active_page !==0 && setactive_page(pre => pre - 1)
                break;
            default:
                break;
        }
    }
    useEffect(() => {
      const handleSetItemInPage = function(active_page,count_item_in_page){
        setproductPage(product_category_page2.filter(function(item,index){
            const page_number = active_page + 1
            console.log((page_number-1)*count_item_in_page,index,page_number*count_item_in_page)
            return index >= (page_number-1)*count_item_in_page && index <page_number*count_item_in_page
        }))
      }
      handleSetItemInPage(active_page,2)
    }, [active_page,product_category_page2])

    return (
        <div className='mt-[40px]'>
            <div className=' relative -z-20 w-full h-[200px]'>
                <img src={titleBanner.image} className='w-full object-cover h-full select-none' alt="" />
                <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold flex flex-col items-center'>
                    <div className='text-[56px] whitespace-nowrap'>{titleBanner.title}</div>
                    <div className='text-[32px] whitespace-nowrap'>{titleBanner.sub}</div>
                </div>
            </div>
            <div className='root_container'>
                <div className='grid grid-cols-4 my-4 gap-4'>
                    <div>
                        {sibar_categories.map(function(item,index){
                            return <div className={`p-2 hover:bg-gray-200 rounded-md text-[14px] ${acive_sibar === index && 'bg-gray-200 border-l-[4px] border-blue-400'}`} key={index} onClick={function(e){handleSetData(e,index)}}>{item}</div>
                        })}
                    </div>
                    <div className=' col-span-3'>
                        {productPage.map(function(item,index){
                            return <CardProductCategoryPage2 key={index} value={{item,index}}/>
                        })}
                        <div className='flex items-center'>
                            <Link className='flex items-center justify-center w-[50px] h-[50px] hover:bg-gray-200' onClick={function(){handleControlPageNumber(0)}}><ArrowBackIosIcon fontSize='small'/></Link>
                            {getPaginationLenght(product_category_page2,2).array.map(function(item,index){
                                return <Link key={index} className={`flex items-center justify-center w-[50px] h-[50px] hover:bg-gray-200 ${active_page === index && ' bg-blue-400 text-white'}`} onClick={function(){handdleActivePage(index)}}>{index+1}</Link>
                            })}
                            <Link className='flex items-center justify-center w-[50px] h-[50px] hover:bg-gray-200' onClick={function(){handleControlPageNumber(1)}}><ArrowForwardIosIcon fontSize='small'/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoriesPage2;