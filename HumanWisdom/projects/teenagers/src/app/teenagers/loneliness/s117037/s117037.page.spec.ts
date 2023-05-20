import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117037Page } from './s117037.page';

describe('S117037Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S117037Page;
  let fixture: ComponentFixture<S117037Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117037Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117037Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
