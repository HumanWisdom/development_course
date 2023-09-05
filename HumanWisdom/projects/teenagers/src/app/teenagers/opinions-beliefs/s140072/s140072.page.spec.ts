import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140072Page } from './s140072.page';

describe('S140072Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140072Page;
  let fixture: ComponentFixture<S140072Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140072Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140072Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
