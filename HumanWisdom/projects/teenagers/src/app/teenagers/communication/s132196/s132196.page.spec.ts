import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132196Page } from './s132196.page';

describe('S132196Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132196Page;
  let fixture: ComponentFixture<S132196Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132196Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132196Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
