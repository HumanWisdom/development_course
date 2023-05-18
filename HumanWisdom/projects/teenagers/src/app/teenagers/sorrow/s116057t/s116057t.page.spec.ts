import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116057tPage } from './s116057t.page';

describe('S116057tPage', () => {
      
    let component:  S116057tPage;
  let fixture: ComponentFixture<S116057tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116057tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116057tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
