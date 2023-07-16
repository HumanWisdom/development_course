import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132124Page } from './s132124.page';

describe('S132124Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132124Page;
  let fixture: ComponentFixture<S132124Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132124Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132124Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
