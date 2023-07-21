import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132010Page } from './s132010.page';

describe('S132010Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132010Page;
  let fixture: ComponentFixture<S132010Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132010Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132010Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
