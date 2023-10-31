import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63009Page } from './s63009.page';

describe('S63009Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63009Page;
  let fixture: ComponentFixture<S63009Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63009Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63009Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
