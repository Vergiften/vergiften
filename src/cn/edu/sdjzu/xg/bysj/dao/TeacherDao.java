package cn.edu.sdjzu.xg.bysj.dao;

import cn.edu.sdjzu.xg.bysj.domain.Teacher;
import util.JdbcHelper;

import java.sql.*;
import java.util.Collection;
import java.util.HashSet;

public final class TeacherDao {
	private static TeacherDao teacherDao=new TeacherDao();
	private TeacherDao(){}
	public static TeacherDao getInstance(){
		return teacherDao;
	}
	private static Collection<Teacher> teachers;

	public Collection<Teacher> findAll() throws SQLException {
		teachers = new HashSet<>();
		Connection connection = JdbcHelper.getConn();
		Statement stmt = connection.createStatement();
		ResultSet resultSet = stmt.executeQuery("select * from Teacher");
		//从数据库中取出数据
		while (resultSet.next()){
			//System.out.println(resultSet.getString("description"));
			teachers.add(new Teacher(resultSet.getInt("id"),
					resultSet.getString("name"),ProfTitleDao.getInstance().find(resultSet.getInt("proftitle_id")),
					DegreeDao.getInstance().find(resultSet.getInt("degree_id")),DepartmentDao.getInstance().find(resultSet.getInt("department_id"))));
		}
		JdbcHelper.close(stmt,connection);
		return teachers;
	}
	
	public Teacher find(Integer id) throws SQLException {
		Connection connection = JdbcHelper.getConn();
		PreparedStatement preparedStatement = connection.prepareStatement("SELECT * FROM teacher where id = ?");
		preparedStatement.setInt(1,id);
		ResultSet resultSet = preparedStatement.executeQuery();
		resultSet.next();
		Teacher teacher = new Teacher(resultSet.getInt("id"),
				resultSet.getString("name"),ProfTitleDao.getInstance().find(resultSet.getInt("proftitle_id")),
				DegreeDao.getInstance().find(resultSet.getInt("degree_id")),DepartmentDao.getInstance().find(resultSet.getInt("department_id")));
		return teacher;
	}
	
	public boolean update(Teacher teacher) throws SQLException {
		Connection connection = JdbcHelper.getConn();
		PreparedStatement preparedStatement = connection.prepareStatement("UPDATE teacher set name = ? ,proftitle_id =?,degree_id =? ,department_id =? where id = ?");
		preparedStatement.setString(1,teacher.getName());
		preparedStatement.setInt(2,teacher.getTitle().getId());
		preparedStatement.setInt(3,teacher.getDegree().getId());
		preparedStatement.setInt(4,teacher.getDepartment().getId());
		preparedStatement.setInt(5,teacher.getId());
		int affectedRowNum = preparedStatement.executeUpdate();
		System.out.println("修改行数为"+ affectedRowNum);
		JdbcHelper.close(preparedStatement,connection);
		return affectedRowNum>0;
	}
	
	public boolean add(Teacher teacher) throws SQLException{
		Connection connection = JdbcHelper.getConn();
		PreparedStatement preparedStatement = connection.prepareStatement("INSERT INTO teacher "+ "(name,proftitle_id,degree_id,department_id)" +" VALUES (?,?,?,?)");
		preparedStatement.setString(1,teacher.getName());
		preparedStatement.setInt(2,teacher.getTitle().getId());
		preparedStatement.setInt(3,teacher.getDegree().getId());
		preparedStatement.setInt(4,teacher.getDepartment().getId());
		int affectedRowNum = preparedStatement.executeUpdate();
		System.out.println(affectedRowNum);
		JdbcHelper.close(preparedStatement,connection);
		return affectedRowNum>0;
	}

	public boolean delete(Integer id) throws SQLException{
		Teacher teacher = this.find(id);
		return this.delete(teacher);
	}
	
	public boolean delete(Teacher teacher) throws SQLException{
		Connection connection = JdbcHelper.getConn();
		PreparedStatement preparedStatement = connection.prepareStatement("Delete from teacher WHERE id =?");
		preparedStatement.setInt(1,teacher.getId());
		int affectedRowNum = preparedStatement.executeUpdate();
		System.out.println(affectedRowNum);
		return affectedRowNum>0;
	}
}
