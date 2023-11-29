import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132016Page } from './s132016.page';

describe('S132016Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132016Page;
  let fixture: ComponentFixture<S132016Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132016Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132016Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
