import React, { useState } from 'react';
import DarkCategory from '../../components/DarkCategory';
import Slider from '../../components/Slider';
import Support from '../../components/Support';
import CategoryModal from './../../components/CategoryModal';
import CardCategory from '../../components/CardCategory';
import ProductListLg from '../../components/ProductListLg';
import CategoryListLg from '../../components/CategoryListLg';
import CategorySlider from './../../components/CategorySlider';
import CardCategoryLg from '../../components/CardCategoryLg';
import TableUpdate from '../../components/TableUpdate';
import SearchControls from '../../components/SearchControls';
import { useScrollToTopPageChange } from '../../global_function';
function Home(props) {
    const data_dark_category = [
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP-Y2UHL_Q_juMJM1o6hQy2WdVsPL4GQGQQ10NNKCXHEDWhqg9eZD1f8BdK0ScSY1ZpM&usqp=CAU',
            title: 'Huyền huyễn',
            views: '5.5'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP-Y2UHL_Q_juMJM1o6hQy2WdVsPL4GQGQQ10NNKCXHEDWhqg9eZD1f8BdK0ScSY1ZpM&usqp=CAU',
            title: 'Huyền huyễn',
            views: '5.5'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP-Y2UHL_Q_juMJM1o6hQy2WdVsPL4GQGQQ10NNKCXHEDWhqg9eZD1f8BdK0ScSY1ZpM&usqp=CAU',
            title: 'Huyền huyễn',
            views: '5.5'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP-Y2UHL_Q_juMJM1o6hQy2WdVsPL4GQGQQ10NNKCXHEDWhqg9eZD1f8BdK0ScSY1ZpM&usqp=CAU',
            title: 'Huyền huyễn',
            views: '5.5'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP-Y2UHL_Q_juMJM1o6hQy2WdVsPL4GQGQQ10NNKCXHEDWhqg9eZD1f8BdK0ScSY1ZpM&usqp=CAU',
            title: 'Huyền huyễn',
            views: '5.5'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP-Y2UHL_Q_juMJM1o6hQy2WdVsPL4GQGQQ10NNKCXHEDWhqg9eZD1f8BdK0ScSY1ZpM&usqp=CAU',
            title: 'Huyền huyễn',
            views: '5.5'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP-Y2UHL_Q_juMJM1o6hQy2WdVsPL4GQGQQ10NNKCXHEDWhqg9eZD1f8BdK0ScSY1ZpM&usqp=CAU',
            title: 'Huyền huyễn',
            views: '5.5'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP-Y2UHL_Q_juMJM1o6hQy2WdVsPL4GQGQQ10NNKCXHEDWhqg9eZD1f8BdK0ScSY1ZpM&usqp=CAU',
            title: 'Huyền huyễn',
            views: '5.5'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP-Y2UHL_Q_juMJM1o6hQy2WdVsPL4GQGQQ10NNKCXHEDWhqg9eZD1f8BdK0ScSY1ZpM&usqp=CAU',
            title: 'Huyền huyễn',
            views: '5.5'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP-Y2UHL_Q_juMJM1o6hQy2WdVsPL4GQGQQ10NNKCXHEDWhqg9eZD1f8BdK0ScSY1ZpM&usqp=CAU',
            title: 'Huyền huyễn',
            views: '5.5'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP-Y2UHL_Q_juMJM1o6hQy2WdVsPL4GQGQQ10NNKCXHEDWhqg9eZD1f8BdK0ScSY1ZpM&usqp=CAU',
            title: 'Huyền huyễn',
            views: '5.5'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP-Y2UHL_Q_juMJM1o6hQy2WdVsPL4GQGQQ10NNKCXHEDWhqg9eZD1f8BdK0ScSY1ZpM&usqp=CAU',
            title: 'Huyền huyễn',
            views: '5.5'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP-Y2UHL_Q_juMJM1o6hQy2WdVsPL4GQGQQ10NNKCXHEDWhqg9eZD1f8BdK0ScSY1ZpM&usqp=CAU',
            title: 'Huyền huyễn',
            views: '5.5'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP-Y2UHL_Q_juMJM1o6hQy2WdVsPL4GQGQQ10NNKCXHEDWhqg9eZD1f8BdK0ScSY1ZpM&usqp=CAU',
            title: 'Huyền huyễn',
            views: '5.5'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP-Y2UHL_Q_juMJM1o6hQy2WdVsPL4GQGQQ10NNKCXHEDWhqg9eZD1f8BdK0ScSY1ZpM&usqp=CAU',
            title: 'Huyền huyễn',
            views: '5.5'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP-Y2UHL_Q_juMJM1o6hQy2WdVsPL4GQGQQ10NNKCXHEDWhqg9eZD1f8BdK0ScSY1ZpM&usqp=CAU',
            title: 'Huyền huyễn',
            views: '5.5'
        },
    ]
    const data =[
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Linh cảnh hành giả',
            chap: 1431,
            view: 3214,
            author: 'Ma đại bảo tiểu lang quân',
            category: 'Đô thị',
        
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Linh cảnh hành giả',
            chap: 1431,
            view: 3214,
            author: 'Ma đại bảo tiểu lang quân',
            category: 'Đô thị',
        
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Linh cảnh hành giả Ma đại bảo tiểu lang quân',
            chap: 1431,
            view: 3214,
            author: 'Ma đại bảo tiểu lang quân',
            category: 'Đô thị',
        
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Linh cảnh hành giả',
            chap: 1431,
            view: 3214,
            author: 'Ma đại bảo tiểu lang quân',
            category: 'Đô thị',
        
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Linh cảnh hành giả',
            chap: 1431,
            view: 3214,
            author: 'Ma đại bảo tiểu lang quân',
            category: 'Đô thị',
        
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Linh cảnh hành giả',
            chap: 1431,
            view: 3214,
            author: 'Ma đại bảo tiểu lang quân',
            category: 'Đô thị',
        
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Linh cảnh hành giả',
            chap: 1431,
            view: 3214,
            author: 'Ma đại bảo tiểu lang quân',
            category: 'Đô thị',
        
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Linh cảnh hành giả',
            chap: 1431,
            view: 3214,
            author: 'Ma đại bảo tiểu lang quân',
            category: 'Đô thị',
        
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Linh cảnh hành giả',
            chap: 1431,
            view: 3214,
            author: 'Ma đại bảo tiểu lang quân',
            category: 'Đô thị',
        
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Linh cảnh hành giả',
            chap: 1431,
            view: 3214,
            author: 'Ma đại bảo tiểu lang quân',
            category: 'Đô thị',
        
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Linh cảnh hành giả',
            chap: 1431,
            view: 3214,
            author: 'Ma đại bảo tiểu lang quân',
            category: 'Đô thị',
        
        },
        {
            image: 'https://yymedia.codeprime.net/media/novels/202203/thumb_linh-canh-hanh-gia-ban-dich-98a58cbce2_60x90.jpg',
            title: 'Linh cảnh hành giả',
            chap: 1431,
            view: 3214,
            author: 'Ma đại bảo tiểu lang quân',
            category: 'Đô thị',
        
        },
    ]
    const product_list_data = [
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
            image: 'https://i.truyenvua.com/ebook/190x247/dao-hai-tac_1552224567.jpg?gf=hdfgdfg&mobile=2',
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
            image: 'https://i.truyenvua.com/ebook/190x247/fairy-tail_1552225441.jpg?gf=hdfgdfg&mobile=2',
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
    useScrollToTopPageChange()
    const [openCategoryModal, setopenCategoryModal] = useState(false)
    const handleOpenCategory = ()=>{
        setopenCategoryModal(!openCategoryModal)
    }
    return (
        <div>
            {openCategoryModal && <CategoryModal value={{data_dark_category,handleOpenCategory}}/>}
            <div className="root_container">
                <div className=' grid grid-cols-4 gap-5 mt-4'>
                    <div><DarkCategory value={{data_dark_category,handleOpenCategory}}/></div>
                    <div className=' col-span-2'><Slider/></div>
                    <div><Support/></div>
                </div>       
            </div>
            <div className="root_container">
                <div className=' grid grid-cols-4 gap-5 mt-4'>
                    <div>
                        <CardCategory value={{product_list_data,heading:'Truyện mới cập nhập',card_type: 1}}/>
                    </div>
                    <div className=' col-span-3'>
                        <ProductListLg value={{product_list_data,card_type:1,heading: 'Lựa chọn của biên tập viên'}}/>
                    </div>
                </div>
                <div className=' grid grid-cols-4 gap-5 mt-4'>
                    <div>
                        <CategorySlider/>
                    </div>
                    <div className=' col-span-3'>
                        <CategoryListLg/>
                    </div>
                </div>
                <div className='my-4'>
                    <img src="https://i.imgur.com/V2YPMTE.jpg" alt="" className=' w-full object-cover' />
                </div>
                <div className=' grid grid-cols-4 gap-4'>
                  <CardCategoryLg value={{data,heading: 'Kim thánh bảng'}}/>
                  <CardCategoryLg value={{data,heading: 'Kim thánh bảng'}}/>
                  <CardCategoryLg value={{data,heading: 'Kim thánh bảng'}}/>
                  <CardCategoryLg value={{data,heading: 'Kim thánh bảng'}}/>
                  <CardCategoryLg value={{data,heading: 'Kim thánh bảng'}}/>
                  <CardCategoryLg value={{data,heading: 'Kim thánh bảng'}}/>
                  <CardCategoryLg value={{data,heading: 'Kim thánh bảng'}}/>
                  <CardCategoryLg value={{data,heading: 'Kim thánh bảng'}}/>
                </div>
                <div>
                    <img src="https://yymedia.codeprime.net/media/bnr/7374e44ea0.jpg" alt="" className='w-full object-cover mt-4' />
                </div>
                <div className='grid grid-cols-4 my-4 gap-4'>
                    <div className=" col-span-3">
                        <ProductListLg value={{product_list_data,card_type: 2,heading:'Top Đề Cử Gần Đây'}}/>
                    </div>
                    <div>
                        <CardCategory value={{product_list_data,heading:'Đề cử mới đăng',card_type: 2}}/>
                    </div>
                </div>
                <TableUpdate/>
                <div>
                    <img src="https://yymedia.codeprime.net/media/bnr/5315f1f383.png" className='w-full my-4 object-cover' alt="" />
                </div>
            </div>
            <SearchControls/>
        </div>
    );
}

export default Home;