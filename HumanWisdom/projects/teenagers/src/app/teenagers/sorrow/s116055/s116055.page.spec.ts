import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S60054Page } from './s116055.page';

describe('S60054Page', () => {
      
    let component:  S60054Page;
  let fixture: ComponentFixture<S60054Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S60054Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S60054Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
