import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46069tPage } from './s46069t.page';

describe('S46069tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46069tPage;
  let fixture: ComponentFixture<S46069tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46069tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46069tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
