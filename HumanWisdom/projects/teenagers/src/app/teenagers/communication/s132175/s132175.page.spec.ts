import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132175Page } from './s132175.page';

describe('S132175Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132175Page;
  let fixture: ComponentFixture<S132175Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132175Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132175Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
