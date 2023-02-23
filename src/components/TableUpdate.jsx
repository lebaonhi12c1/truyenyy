import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function TableUpdate(props) {
    const [data, setdata] = useState(
        [
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
                category: 'Đô Thị'
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
                category: 'Đô Thị'        
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
            category: 'Đô Thị'        },
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
            category: 'Đô Thị'        },
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
            category: 'Đô Thị'        },
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
            category: 'Đô Thị'        },
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
            category: 'Đô Thị'        },
        ]
    )
    const [index, setindex] = useState(1)
    return (
        <div className='border border-gray-200 rounded-lg p-3'>
            <div className='flex items-center gap-4 mb-4'>
                <div className='text-[14px] font-bold'>Truyện mới cập nhật</div>
                <div className='flex items-center gap-1'>
                    <div  className={`${index === 1 ? 'bg-gray-700 text-yellow-400':'bg-gray-400 hover:opacity-70 text-white'} p-1 text-[12px] rounded-[4px] text-center cursor-pointer select-none`} onClick={function(){setindex(1)}}>YY - Dịch</div>
                    <div  className={`${index === 2 ? 'bg-gray-700 text-yellow-400':'bg-gray-400 hover:opacity-70 text-white'} p-1 text-[12px] rounded-[4px] text-center cursor-pointer select-none`} onClick={function(){setindex(2)}}>Sáng tác</div>
                </div>
            </div>
            <table className='w-full'>
                {data.map((item,index)=>{
                    return index<25 && (
                        <tr  className={`${index %2===0 ? 'bg-gray-300': 'bg-white'}`}>
                            <td className=' cursor-pointer p-2 hover:text-blue-400 text-[12px]'>{item.category}</td>
                            <td className=' cursor-pointer p-2 hover:text-blue-400 text-[12px] font-bold'><Link to={`/truyen/${index}`}>{item.title}</Link></td>
                            <td className=' cursor-pointer p-2 hover:text-blue-400 text-[12px]'>Chương: {item.chap}</td>
                            <td className=' cursor-pointer p-2 hover:text-blue-400 text-[12px]'>{item.author}</td>
                            <td className=' cursor-pointer p-2 hover:text-blue-400 text-[12px] text-right'>{item.updateAt}12 phút</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default TableUpdate;