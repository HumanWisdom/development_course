import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63001Page } from './s63001.page';

describe('S63001Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63001Page;
  let fixture: ComponentFixture<S63001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63001Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
