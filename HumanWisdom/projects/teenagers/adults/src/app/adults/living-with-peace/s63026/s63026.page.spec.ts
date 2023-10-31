import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63026Page } from './s63026.page';

describe('S63026Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63026Page;
  let fixture: ComponentFixture<S63026Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63026Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63026Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
