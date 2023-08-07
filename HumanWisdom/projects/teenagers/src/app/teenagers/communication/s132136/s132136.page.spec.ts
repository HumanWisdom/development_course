import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132136Page } from './s132136.page';

describe('S132136Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132136Page;
  let fixture: ComponentFixture<S132136Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132136Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132136Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
