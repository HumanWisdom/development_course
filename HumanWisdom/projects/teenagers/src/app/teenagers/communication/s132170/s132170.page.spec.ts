import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132170Page } from './s132170.page';

describe('S132170Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132170Page;
  let fixture: ComponentFixture<S132170Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132170Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132170Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
