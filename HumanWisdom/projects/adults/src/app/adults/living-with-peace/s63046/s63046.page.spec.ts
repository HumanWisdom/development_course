import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63046Page } from './s63046.page';

describe('S63046Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63046Page;
  let fixture: ComponentFixture<S63046Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63046Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63046Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
