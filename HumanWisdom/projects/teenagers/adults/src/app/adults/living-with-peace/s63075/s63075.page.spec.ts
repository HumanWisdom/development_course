import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63075Page } from './s63075.page';

describe('S63075Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63075Page;
  let fixture: ComponentFixture<S63075Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63075Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63075Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
