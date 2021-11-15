import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63044Page } from './s63044.page';

describe('S63044Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63044Page;
  let fixture: ComponentFixture<S63044Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63044Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63044Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
