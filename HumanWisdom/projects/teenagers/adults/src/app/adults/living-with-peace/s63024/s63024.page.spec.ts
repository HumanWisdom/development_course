import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63024Page } from './s63024.page';

describe('S63024Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63024Page;
  let fixture: ComponentFixture<S63024Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63024Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63024Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
