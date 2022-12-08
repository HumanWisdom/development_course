import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S48068tPage } from './s48068t.page';

describe('S48068tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S48068tPage;
  let fixture: ComponentFixture<S48068tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S48068tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S48068tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
