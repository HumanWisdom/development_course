import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18019Page } from './s18019.page';

describe('S18019Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18019Page;
  let fixture: ComponentFixture<S18019Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18019Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18019Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
