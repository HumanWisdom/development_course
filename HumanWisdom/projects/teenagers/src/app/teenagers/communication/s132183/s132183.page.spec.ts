import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132183Page } from './s132183.page';

describe('S132183Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132183Page;
  let fixture: ComponentFixture<S132183Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132183Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132183Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
