import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63010Page } from './s63010.page';

describe('S63010Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63010Page;
  let fixture: ComponentFixture<S63010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
