import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63014Page } from './s63014.page';

describe('S63014Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63014Page;
  let fixture: ComponentFixture<S63014Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63014Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63014Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
