import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132019Page } from './s132019.page';

describe('S132019Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132019Page;
  let fixture: ComponentFixture<S132019Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132019Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132019Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
