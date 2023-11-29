import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132249Page } from './s132249.page';

describe('S132249Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132249Page;
  let fixture: ComponentFixture<S132249Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132249Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132249Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
