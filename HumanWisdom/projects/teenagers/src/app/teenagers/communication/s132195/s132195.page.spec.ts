import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53194Page } from './s132195.page';

describe('S53194Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53194Page;
  let fixture: ComponentFixture<S53194Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53194Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53194Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
