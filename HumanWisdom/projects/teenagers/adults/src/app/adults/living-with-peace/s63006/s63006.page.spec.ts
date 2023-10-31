import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63006Page } from './s63006.page';

describe('S63006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63006Page;
  let fixture: ComponentFixture<S63006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
