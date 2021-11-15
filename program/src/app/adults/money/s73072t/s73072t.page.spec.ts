import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73072tPage } from './s73072t.page';

describe('S73072tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73072tPage;
  let fixture: ComponentFixture<S73072tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73072tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73072tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
