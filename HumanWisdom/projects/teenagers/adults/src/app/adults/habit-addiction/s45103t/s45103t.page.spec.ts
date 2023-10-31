import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45103tPage } from './s45103t.page';

describe('S45103tPage', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45103tPage;
  let fixture: ComponentFixture<S45103tPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45103tPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45103tPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
