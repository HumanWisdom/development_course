import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18015Page } from './s18015.page';

describe('S18015Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18015Page;
  let fixture: ComponentFixture<S18015Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18015Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18015Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
